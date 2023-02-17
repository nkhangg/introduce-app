import React from 'react';
import login from '../assets/img/login.png';
import manager from '../assets/img/main.png';
import { SectionGuide } from '../component';

const GuideManager = ({ title, list, after, before }) => {
    return (
        <section id="guide-login" className="pt-[61px] flex flex-col gap-20">
            <h1 className="text-3xl font-bold">- Hướng Dẫn Sử Dụng Quản Lí {title}</h1>

            <div className="grid grid-cols-2 justify-between">
                <SectionGuide title={'1 - Đăng nhập vào ứng dụng'}>
                    <p>Đăng nhập vào ứng dụng thành công mới có thể sử dụng các chức năng khác</p>
                </SectionGuide>

                <div className="flex justify-end">
                    <img src={login} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'2 - Giao diện chính'}>
                        <p>
                            Sau khi vào giao diện chính -{'>'} Quản Lý {title}
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={manager} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={`3 - Giao diện Quản Lí ${title}`}>
                        <p>Sau khi mỡ thành công giao diện. Có 2 tabs là </p>
                        <ul className="list-disc pl-8 flex gap-4 flex-col">
                            <li>
                                Cập Nhật: Dùng để thêm mới, sửa đổi và xóa một {title} trong danh sách {title}(tab danh
                                sách)
                            </li>
                            <li>Danh Sách: Danh sách hiển thị toàn bọ danh sách {title} được lưu trữ</li>
                        </ul>
                    </SectionGuide>

                    <SectionGuide title={`4 - Thực Hiện Các Chức Năng Thêm - Mới`}>
                        <ul className="list-disc pl-8 flex gap-4 flex-col">
                            <li>
                                Thêm: Dùng để thêm mới một {title}. Khi điền đầy đủ thông tin của 1 {title} -{'>'}
                                nhấn nút thêm nếu mã {title} không trung với bất kì {title} nào có trong danh sách, thì{' '}
                                {title} đó sẽ được thêm vào danh sách và hiển thị trong tab danh sách
                            </li>
                            <li>Mới: Làm mới các ô nhập</li>
                        </ul>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={after} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={`5 - Thực Hiện Các Chức Năng Sửa - Xóa - Điều Hướng`}>
                        <p>
                            Chức năng Sửa Xóa và Điều Hướng chỉ được hiển thị khi nhấn vào một {title} bất kì bên bảng
                            danh sách {title} (tab Danh Sách)
                        </p>
                        <ul className="list-disc pl-8 flex gap-4 flex-col">
                            <li>
                                Sửa: Dùng để chỉnh sữa thông tin của {title} vừa chọn kể cả chính tài khoản hiện tại
                                đăng nhập vào hệ thống
                            </li>
                            <li>
                                Xóa: Dùng để xóa {title} vừa chọn (Chỉ tài khoản có role là quản lí mới có quyền xóa)
                            </li>
                            <li>
                                Điều Hướng: Dùng để di chuyển trong danh sách {title} gồm có: đầu danh sách, cuối danh
                                sách, lùi về một {title} và tiến tới một {title}
                            </li>
                        </ul>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={before} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <SectionGuide title={`6 - Xem Danh Sách Tất Cả ${title}`}>
                    <p>
                        tab Danh Sách hiển thị thông tin tất cả các {title} được lưu trong hệ thống. Khi nhấn vào một{' '}
                        {title} bất kì, {title} đó sẽ được hiển thị bên tab Cập Nhật
                    </p>
                </SectionGuide>

                <div className="flex justify-end">
                    <img src={list} alt="login" />
                </div>
            </div>

            <div className="h-[400px] w-full"></div>
        </section>
    );
};

export default GuideManager;
