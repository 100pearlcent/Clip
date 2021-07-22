import light from "./images/light.svg"
import graph from "./images/graph.svg";
import window from "./images/window.svg";
import home from "./icons/home_black.svg";
import todo from "./icons/todo_black.svg";
import memo from "./icons/memo_black.svg";
import homeClicked from "./icons/home_blue.svg";
import todoClicked from "./icons/todo_blue.svg";
import memoClicked from "./icons/memo_blue.svg";

const title = [
    {
        key: 0,
        main: 'What Makes Us Stand Out',
        desc: 'We provide the note app that is just what you are looking for!'
    }, {
        key: 1,
        main: 'How It Works',
        desc: 'There is beauty in the simplicity'
    }
]

const benefit = [
    {
        key: 0,
        imgSrc: light,
        subtitle: 'Instant Managing',
        desc: 'Stop overthinking and hesitating on your precious planning'
    }, {
        key: 1,
        imgSrc: graph,
        subtitle: 'Innovative Schedule',
        desc: 'We believe intuitive design makes easy scheduling'
    }, {
        key: 2,
        imgSrc: window,
        subtitle: 'Compact Design',
        desc: 'We offer non-hectic UX/UI for intuitive planning'
    }
];

const paragraph = [
    {
        key: 0,
        desc: 'The perfect note app for the one who knows the beauty of minimalistics'
    },
    {
        key: 1,
        desc: 'As you can see above, the simplicity is our philosophy. We provide a calendar, to-do list and a sticky-memos at a glance !'
    }
];

const checkMember = [
    {
        key: 0,
        type: 'login',
        title: 'One of us?',
        desc: 'Be the one who never hesitates to open new windows in your life',
        button: '로 그 인'
    },
    {
        key: 1,
        type: 'register',
        title: 'New here?',
        desc: 'Get started with your account for free and empower your schedule managing skill',
        button: '가 입 하 기'
    }
];

const sideIcon = [
    {
        key: 0,
        default: home,
        clicked: homeClicked 
    },
    {
        key: 1,
        default: todo,
        clicked: todoClicked
    },
    {
        key: 2,
        default: memo,
        clicked: memoClicked
    }
];

export { title, benefit, paragraph, checkMember, sideIcon };