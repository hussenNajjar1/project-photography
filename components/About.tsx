import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1 className='text-2xl font-serif  text-center   text-white  py-16  lg:text-[50px]  '> من نحنا  </h1>
      <div className="about container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
        {/* جعل النص والصورة يظهران جنبًا إلى جنب على الكمبيوتر وأعلى بعضهما على الهواتف المحمولة */}
        <div className="text text-center md:text-right md:flex-1 md:order-1 mb-8 md:mb-0 pr-3 text-white font-bold">
          <h1 className="text-2xl font-bold mb-4"> استديو  سدرة  </h1>
          <p className="text-lg leading-relaxed mb-4">استديو سدرة متخصص في تقديم خدمات التصوير للأعراس والحفلات، بالإضافة إلى خدمات التصميم والتسويق. نسعى لتوفير تجربة فريدة لعملائنا من خلال دمج الاحترافية والإبداع في خدماتنا</p>
          <p className="text-lg leading-relaxed mb-4">


            تصميم وتنفيذ حملات إعلانية مخصصة لجذب الجمهور المستهدف.
            تحليل أداء الحملات وتقديم تقارير مفصلة لتحسين استراتيجيات التسويق.
            سدرة تلتزم بتقديم خدمات متميزة تلبي احتياجات العملاء وتساعدهم على تحقيق أفضل النتائج في مناسباتهم الخاصة. تتميز الشركة بفريق عمل محترف ومبدع يسعى دائماً لتقديم الأفضل.

          </p>
        </div>
        <div className="image md:order-2">
          <img src="/images/png/Focus-pana.PNG" alt="" className='w-[500px] rounded-lg shadow-lg' />
        </div>
      </div>
    </div>
  )
}

export default About;
