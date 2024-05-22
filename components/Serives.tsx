import React from 'react';
const Services = () => {
    return (
        <div className='container mx-auto'>
            <div className="cards flex justify-center items-center flex-wrap">
                <div className="card w-[330px] border border-sky-700 rounded-[20px] flex flex-col justify-center items-center mt-2 lg:mx-2">
                    <div className="card_head pt-3">
                        <img src="/images/png/img5.png" alt="" className='w-[70px]' />
                    </div>
                    <div className="card_body text-center h-[170px] px-4 lg:px-1 ">
                        <h1 className='py-3 text-2xl text-white'> التصوير</h1>
                        <p className='pb-1 text-white font-serif'>


                            تقديم تصوير احترافي للأعراس  بأحث الكاميرات يشمل جميع اللحظات الهامة، بدءاً من التحضيرات وصولاً إلى الاحتفال..
                            استخدام تقنيات تصوير متقدمة لضمان جودة عالية للصور والفيديو.

                        </p>

                    </div>
                </div>
                <div className="card w-[330px] border border-sky-700 rounded-[20px] flex flex-col justify-center items-center mt-2 lg:mx-2">
                    <div className="card_head pt-3">
                        <img src="/images/png/img3.png" alt="" className='w-[70px]' />
                    </div>
                    <div className="card_body text-center h-[170px] px-4 lg:px-1  ">
                        <h1 className='py-3 text-2xl text-white'> التسويق </h1>
                        <p className='pb-1 text-white font-serif'>
                            إدارة حملات التسويق عبر وسائل التواصل الاجتماعي لزيادة الوعي بالعلامة التجارية.
                            إنشاء محتوى تسويقي جذاب يشمل الصور والفيديوهات للترويج للخدمات والمنتجات
                        </p>

                    </div>
                </div>
                <div className="card w-[330px] border border-sky-700 rounded-[20px] flex flex-col justify-center items-center mt-2 lg:mx-2 ">
                    <div className="card_head pt-3">
                        <img src="/images/png/img1.png" alt="" className='w-[70px]' />
                    </div>
                    <div className="card_body text-center h-[170px] px-4 lg:px-1 ">
                        <h1 className='py-3 text-2xl text-white'> التصميم</h1>
                        <p className='pb-1 text-white font-serif'>تصميم دعوات مخصصة للأعراس والحفلات بأساليب مبتكرة تناسب ذوق العملاء.
                            توفير خيارات متنوعة من التصاميم تشمل الألوان، الخطوط، والعناصر الزخرفية</p>

                    </div>
                </div>
                <div className="card w-[330px] border border-sky-700 rounded-[20px] flex flex-col justify-center items-center mt-2 lg:mx-2 ">
                    <div className="card_head pt-3">
                        <img src="/images/png/img1.png" alt="" className='w-[70px]' />
                    </div>
                    <div className="card_body text-center h-[170px] px-4 lg:px-1 ">
                        <h1 className='py-3 text-2xl text-white'> التصميم</h1>
                        <p className='pb-1 text-white font-serif'>تصميم دعوات مخصصة للأعراس والحفلات بأساليب مبتكرة تناسب ذوق العملاء.
                            توفير خيارات متنوعة من التصاميم تشمل الألوان، الخطوط، والعناصر الزخرفية</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
