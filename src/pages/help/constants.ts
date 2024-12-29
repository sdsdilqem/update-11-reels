import type { HelpSectionType } from './types';

export const helpSections: HelpSectionType[] = [
  {
    title: 'Sifarişlər',
    questions: [
      {
        q: 'Sifarişimi necə izləyə bilərəm?',
        a: 'Sifarişinizi "Sifarişlərim" bölməsindən izləyə bilərsiniz. Burada sifarişinizin hazırki statusu və çatdırılma məlumatları göstərilir.'
      },
      {
        q: 'Sifarişimi ləğv edə bilərəm?',
        a: 'Bəli, sifarişiniz hazırlanmağa başlamazdan əvvəl ləğv edə bilərsiniz. Bunun üçün "Sifarişlərim" bölməsindən sifarişi seçib "Ləğv et" düyməsini sıxın.'
      }
    ]
  },
  {
    title: 'Ödəniş',
    questions: [
      {
        q: 'Hansı ödəniş üsulları mövcuddur?',
        a: 'Nağd ödəniş, bank kartı və ya onlayn ödəmə vasitəsilə ödəniş edə bilərsiniz. Bütün ödənişlər təhlükəsiz şəkildə həyata keçirilir.'
      },
      {
        q: 'Ödənişim təhlükəsizdir?',
        a: 'Bəli, bütün ödənişlər SSL şifrələmə ilə qorunur və PCI DSS standartlarına uyğundur. Məlumatlarınız tam təhlükəsizdir.'
      }
    ]
  },
  {
    title: 'Hesab',
    questions: [
      {
        q: 'Şifrəmi necə dəyişə bilərəm?',
        a: 'Tənzimləmələr > Təhlükəsizlik bölməsindən şifrənizi dəyişə bilərsiniz.'
      },
      {
        q: 'Hesabımı necə silə bilərəm?',
        a: 'Hesabınızı silmək üçün dəstək xidməti ilə əlaqə saxlayın. Diqqət edin ki, bu əməliyyat geri qaytarıla bilməz.'
      }
    ]
  }
];