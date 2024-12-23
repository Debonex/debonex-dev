import { Forward, Backward, Idle } from './bubbleItems';

const schedule_without_interleaved = (pp: number, microBatch: number) => {
  const schedules = Array.from({ length: pp }, (_) => []);
  let tick = 0;
  let all_done = false;
  const states = Array.from({ length: pp }, () => ({
    forward: 0,
    backward: 0,
  }));

  while (!all_done) {
    let actions = [];
    const action = (
      type: 'backward_start' | 'backward_end' | 'forward' | 'idle',
      idx?: number,
    ) => {
      actions.push({ type, idx });
    };

    // judge action
    for (let pp_rank = 0; pp_rank < pp; pp_rank++) {
      const ppState = states[pp_rank];
      if (ppState.backward % 1 != 0) {
        action('backward_end', ppState.backward + 0.5);
        continue;
      }
      // first pp rank
      if (pp_rank == 0) {
        if (ppState.backward == states[1].backward - 1) {
          action('backward_start', ppState.backward + 1);
        } else if (ppState.forward < microBatch) {
          action('forward', ppState.forward + 1);
        } else {
          action('idle');
        }
      }
      // middle pp rank
      else if (pp_rank < pp - 1) {
        if (ppState.backward == states[pp_rank + 1].backward - 1) {
          action('backward_start', ppState.backward + 1);
        } else if (ppState.forward < states[pp_rank - 1].forward) {
          action('forward', ppState.forward + 1);
        } else {
          action('idle');
        }
      }
      // last pp rank
      else {
        if (ppState.backward == ppState.forward - 1) {
          action('backward_start', ppState.backward + 1);
        } else if (ppState.forward < states[pp_rank - 1].forward) {
          action('forward', ppState.forward + 1);
        } else {
          action('idle');
        }
      }
    }

    // update schedule

    for (let pp_rank = 0; pp_rank < pp; pp_rank++) {
      const action = actions[pp_rank];
      const schedule = schedules[pp_rank];
      const key = `${tick}-${pp_rank}`;
      const state = states[pp_rank];
      if (action.type == 'forward') {
        schedule.push(<Forward idx={action.idx} key={key} />);
        state.forward = action.idx;
      } else if (action.type == 'backward_start') {
        state.backward = action.idx - 0.5;
      } else if (action.type == 'backward_end') {
        schedule.push(<Backward idx={action.idx} key={key} />);
        state.backward = action.idx;
      } else {
        schedule.push(<Idle key={key} />);
      }
    }

    if (states[0].backward == microBatch) {
      all_done = true;
    }
    // prevent unknown infinite loop
    if (tick > 100) {
      all_done = true;
    }
    tick++;
  }

  return schedules;
};

export { schedule_without_interleaved };
