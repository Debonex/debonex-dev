#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

#[macro_export]
macro_rules! linked_list {
    () => {
        None as Option<Box<ListNode>>
    };
    ($($x:expr),*) => {{
        let vec = vec![$($x),*];
        let mut head = None;
        for val in vec.iter().rev(){
            head = Some(Box::new(ListNode{
                val: *val,
                next:head
            }));
        }
        head
    }};
}

#[test]
fn test() {
    let l1 = linked_list!(1, 2, 3, 4, 5);
    let mut l2 = linked_list!(6);
    let l3 = linked_list!(6, 1, 2, 3, 4, 5);
    l2.as_mut().unwrap().next = l1;
    assert_eq!(l2, l3);
}
