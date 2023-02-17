import {
    BsFillPersonFill,
    BsFillPeopleFill,
    BsFillFilePersonFill,
    BsFillBarChartFill,
    BsBookFill,
} from 'react-icons/bs';
import { HiLogin } from 'react-icons/hi';
import { MdOutlinePassword } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';

export const menu = [
    {
        id: 1,
        name: 'Đăng Nhập',
        icon: <HiLogin />,
        link: 'guide-login',
    },
    {
        id: 2,
        name: 'Đổi Mật Khẩu',
        icon: <MdOutlinePassword />,
        link: 'guide-refresh-password',
    },
    {
        id: 3,
        name: 'Nhân Viên',
        icon: <BsFillPersonFill />,
        link: 'guide-saff',
    },

    {
        id: 4,
        name: 'Chuyên Đề',
        icon: <BsBookFill />,
        link: 'guide-thematic',
    },

    {
        id: 5,
        name: 'Người Học',
        icon: <BsFillPeopleFill />,
        link: 'guide-leaner',
    },
    {
        id: 6,
        name: 'Học Viên',
        icon: <BsFillFilePersonFill />,
        link: 'guide-student',
    },
    {
        id: 7,
        name: 'Thống Kê',
        icon: <BsFillBarChartFill />,
        link: 'guide-chart',
    },
    {
        id: 8,
        name: 'Khóa Học',
        icon: <ImBooks />,
        link: 'guide-coures',
    },
];
