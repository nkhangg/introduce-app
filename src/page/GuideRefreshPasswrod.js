import React from 'react';
import login from '../assets/img/login.png';
import main from '../assets/img/main.png';
import rgpass from '../assets/img/repass.png';
import { BsDot } from 'react-icons/bs';
import { SectionGuide } from '../component';

const GuideRefreshPasswrod = () => {
    return (
        <section id="guide-login" className="pt-[61px] flex flex-col gap-20">
            <h1 className="text-3xl font-bold">- Hướng Dẫn Đổi Mật Khẩu</h1>

            <div className="grid grid-cols-2 justify-between">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'1 - Đăng nhập vào ứng dụng'}>
                        <p>Đăng nhập vào ứng dụng thành công mới có thể thảy đổi mật khẩu</p>
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
                            Sau khi vào giao diện chính -{'>'} Biểu tượng chìa khóa -{'>'} Mỡ giao diện đổi mật khẩu
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={main} alt="login" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-between gap-7">
                <div className="flex flex-col gap-10">
                    <SectionGuide title={'3 - Giao diện Đổi Mật Khẩu'}>
                        <p>
                            Sau khi mỡ giao diện đổi mật khẩu thành công thì tên đăng nhập sẽ được hệ thông điền tự động
                            theo thông tin đăng nhập của bạn. Việc tiếp theo của bạn là nhập Mật Khẩu Hiện Tại, Mật Khẩu
                            Mới, Xác Nhận Mật Khẩu
                        </p>
                    </SectionGuide>

                    <SectionGuide title={'4 - Thực hiện đổi mật khẩu'}>
                        <p>
                            Sau khi hoàn thành các bước trên bạn hãy ấn nút Đồng Ý để xác nhận đổi mật khẩu. Khi đổi mật
                            khẩu thành công hệ thông sẽ chuyễn đến trang đăng nhập
                        </p>
                    </SectionGuide>
                </div>

                <div className="flex justify-end">
                    <img src={rgpass} alt="login" />
                </div>
            </div>

            <SectionGuide title={'Khác'} icon={<BsDot />}>
                <p>Nút Hủy Bỏ để kêt thúc Đổi Mật Khẩu</p>
            </SectionGuide>

            <div className="h-[400px] w-full"></div>
        </section>
    );
};

export default GuideRefreshPasswrod;
