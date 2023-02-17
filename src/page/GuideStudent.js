import React from 'react';
import login from '../assets/img/login.png';
import after from '../assets/img/hocvien1.png';
import thematic from '../assets/img/hocvien5.png';
import leaner from '../assets/img/hocvien2.png';
import manager from '../assets/img/main.png';
import { SectionGuide } from '../component';

const GuideStudent = () => {
    return (
        <section id="guide-login" className="pt-[61px] flex flex-col gap-20">
            <h1 className="text-3xl font-bold">- Hướng Dẫn Sử Dụng Quản Lí Học Viên</h1>

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
                        <p>Sau khi vào giao diện chính -{'>'} Quản Lý Học Viên</p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={manager} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'3 - Giao diện Quản Lí Học Viên (Học Viên)'}>
                        <p>Sau khi mỡ thành công giao diện. Có 2 tabs là </p>
                        <ul className="list-disc pl-8 flex gap-4 flex-col">
                            <li>Học Viên: Dùng để hiển thị danh sách các Học Viên</li>
                            <li>Người Học: Hiển thị danh sách các người học</li>
                            <li>
                                Xóa Khóa Học: Nút xóa chỉ hiển thị khi ấn vào một học viên bất kì trên bảng. Cho phép
                                xóa học viên (Chỉ tài khoản có role quản lí mới có quyền xóa)
                            </li>
                            <li>
                                Cập Nhật Điểm: Nút Cập Nhật Điểm chỉ hiển thị khi ấn vào một học viên bất kì trên bảng.
                                Chọn một học viên để cập nhật lại điểm cho học viên này
                            </li>
                        </ul>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={after} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'4 - Giao diện Quản Lí Học Viên (Người học)'}>
                        <p>
                            - Tab người học hiên thị toàn bộ người nếu không có từ khóa tìm kiếm. Sẽ hiển thị danh sách
                            học viên phù hợp khi có từ khóa tìm kiếm
                        </p>

                        <p>
                            - Nút thêm vào khóa học sẽ thêm một Người Học trỡ thành học viên khi ấn vào một Người Học
                            bất kì
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={leaner} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'5 - Hiển Thị Học Viên Theo Chuyên Đề Và Khóa Học'}>
                        <p>
                            Danh sách Học Viên sẽ hiển thị theo Chuyên Đề và Khóa Học Tương ứng. Khi chọn một chuyên đề
                            các khóa học có trong Chuyên Đề đó sẽ được hiển thị trong danh sách chọn
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end gap-3">
                    <img src={thematic} alt="login" />
                </div>
            </div>

            <div className="h-[400px] w-full"></div>
        </section>
    );
};

export default GuideStudent;
