import React from 'react';
import login from '../assets/img/login.png';
import after from '../assets/img/khoahoc1.png';
import before from '../assets/img/khoahoc2.png';
import list from '../assets/img/khoahoc3.png';
import cbo from '../assets/img/khoahoc4.png';
import manager from '../assets/img/main.png';
import { SectionGuide } from '../component';

const GuiCoures = () => {
    return (
        <div>
            <section id="guide-login" className="pt-[61px] flex flex-col gap-20">
                <h1 className="text-3xl font-bold">- Hướng Dẫn Sử Dụng Quản Lí Khóa Học</h1>

                <div className="grid grid-cols-2 justify-between">
                    <div className="flex flex-col gap-10">
                        <SectionGuide title={'1 - Đăng nhập vào ứng dụng'}>
                            <p>Đăng nhập vào ứng dụng thành công mới có thể sử dụng các chức năng khác</p>
                        </SectionGuide>
                    </div>

                    <div className="flex justify-end">
                        <img src={login} alt="login" />
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-between gap-7">
                    <div className="flex flex-col gap-10">
                        <SectionGuide title={'2 - Giao diện chính'}>
                            <p>
                                Sau khi vào giao diện chính -{'>'} Bấm và Hệ Thống -{'>'} Quản Lý Khóa Học
                            </p>
                        </SectionGuide>
                    </div>

                    <div className="flex justify-end">
                        <img src={manager} alt="login" />
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-between gap-7">
                    <div className="flex flex-col gap-10">
                        <SectionGuide title={'3 - Giao diện Quản Lí Khóa Học'}>
                            <p>Sau khi mỡ thành công giao diện. Có 2 tabs là </p>
                            <ul className="list-disc pl-8 flex gap-4 flex-col">
                                <li>
                                    Cập Nhật: Dùng để thêm mới, sửa đổi và xóa một Khóa Học trong danh sách nhân
                                    viên(tab danh sách)
                                </li>
                                <li>Danh Sách: Danh sách hiển thị toàn bọ danh sách Khóa Học được lưu trữ</li>
                            </ul>
                        </SectionGuide>

                        <SectionGuide title={'4 - Thực Hiện Các Chức Năng Thêm - Mới'}>
                            <ul className="list-disc pl-8 flex gap-4 flex-col">
                                <li>
                                    Thêm: Dùng để thêm mới một Khóa Học. Khi điền đầy đủ thông tin của 1 Khóa Học -{'>'}
                                    nhấn nút thêm nếu mã Khóa Học không trung với bất kì Khóa Học nào có trong danh
                                    sách, thì Khóa Học đó sẽ được thêm vào danh sách và hiển thị trong tab danh sách
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
                        <SectionGuide title={'5 - Thực Hiện Các Chức Năng Sửa - Xóa - Điều Hướng'}>
                            <p>
                                Chức năng Sửa Xóa và Điều Hướng chỉ được hiển thị khi nhấn vào một Khóa Học bất kì bên
                                bảng danh sách Khóa Học (tab Danh Sách)
                            </p>
                            <ul className="list-disc pl-8 flex gap-4 flex-col">
                                <li>
                                    Sửa: Dùng để chỉnh sữa thông tin của Khóa Học vừa chọn kể cả chính tài khoản hiện
                                    tại đăng nhập vào hệ thống
                                </li>
                                <li>
                                    Xóa: Dùng để xóa Khóa Học vừa chọn (không thể xóa tài khoản đang đăng nhập vào hệ
                                    thống. Chỉ tài khoản có role là quản lí mới có quyền xóa)
                                </li>
                                <li>
                                    Điều Hướng: Dùng để di chuyển trong danh sách Khóa Học gồm có: đầu danh sách, cuối
                                    danh sách, lùi về một Khóa Học và tiến tới một Khóa Học
                                </li>
                            </ul>
                        </SectionGuide>
                    </div>

                    <div className="flex justify-end">
                        <img src={before} alt="login" />
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-between gap-7">
                    <div className="flex flex-col gap-10">
                        <SectionGuide title={'6 - Xem Danh Sách Tất Cả Khóa Học'}>
                            <p>
                                tab Danh Sách hiển thị thông tin tất cả các Khóa Học được lưu trong hệ thống. Khi nhấn
                                vào một Khóa Học bất kì, Khóa Học đó sẽ được hiển thị bên tab Cập Nhật
                            </p>
                        </SectionGuide>
                    </div>

                    <div className="flex justify-end">
                        <img src={list} alt="login" />
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-between gap-7">
                    <SectionGuide title={'7 - Xem Danh Sách Khóa Học Theo Chuyên Đề'}>
                        <p>
                            Danh sách khóa học sẽ hiển thị tương ướng với mỗi chuyên đề được chọn trên thanh chuyên đề
                        </p>
                    </SectionGuide>

                    <div className="flex justify-end">
                        <img src={cbo} alt="login" />
                    </div>
                </div>

                <div className="h-[400px] w-full"></div>
            </section>
        </div>
    );
};

export default GuiCoures;
