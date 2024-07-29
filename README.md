# Merhaba.

Öncelikle, bu frontend ve diğer backend projesinde 3 günde elimden gelen her şeyi gün boyu çalışarak yaptığımı söylemek isterim.

Bu projeyi geliştirerek TypeScript ve HapiJS yeteneklerimi pekiştirmiş oldum ve plugin ve servis katman yapısını iyice pekiştirmiş oldum, ancak PostgreSQL ve PrismaORM'e MongoDB ve Mongoose'a aşina olduğum kadar aşina olmasam da kolaylıkla öğrenirim düşüncesiyle girişmemden ötürü üç günde her şeyi uçtan uca biritemedim, böylelikle frontend kısmıyla backend kısmını bağlayıp deploy etme şansını bulamadım.

Kodumu okurken bazı kısımlarda hiç iyi pratiklerden ödün vermezken bazı kısımlarda zamanı yetiştirmeye çalışmak adına any type assertion larıyla ilerlemek durumunda kaldığımı göreceksiniz.
Projenin %85'ini bildiğim en iyi pratiklerle yaptım ancak tabii ki testing, improving testability(inversion of control through dependency injection, Awilix container) ve observability(implementing a logger) kısımlarında geliştirmek istediğim bir çok şey olsa da zamanım maalesef bu kadarına elverdi.

Backend kısmını deploy edemediğimden ötürü frontend kısmını da etmedim, bundan ötürü maalesef lokalinize indirmenizi rica ediyorum.

- Node versiyonumuz v20.15.1'dir. nvm install v20.15.1 && nvm use v20.15.1 aracılığıyla bu versiyonu kullanabilirsiniz.
- pnpm complete-local-setup vasıtasıyla görüntüleyebilirsiniz. Lütfen scripti çalıştırmadan önce docker daemonunuzun çalıştığından emin olunuz.
- pnpm prisma:studio sayesinde http://localhost:5555'taki dockerda çalışan PostgreSQL veritabanının tablolarını basit bir web arayüzü arayıcılığıyla inceleyebilir ve belirli verileri manuel olarak da değiştirebilirsiniz.
- http://localhost:3001/docs aracılığıyla swagger dokümantasyonunu görebilirsiniz.

## app_nation_case_study_backend

AppNation's case study. Monolithic NodeJS backend application using HapiJS and Prisma.
