import { faker } from '@faker-js/faker';

function generateFakeNews(count) {
    const news = [];
    for (let i = 1; i <= count; i++) {
        news.push({
            id: i,
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            date: faker.date.recent(30).toLocaleDateString('ru-RU'),
            image: faker.image.avatar(),
        });
    }
    return news;
}
function generateFakeServices(count) {
    const services = [];
    for (let i = 1; i <= count; i++) {
        services.push({
            id: i,
            title: faker.company.catchPhrase(),
            description: faker.lorem.paragraph(),
            image: faker.image.avatar(),
        });
    }
    return services;
}

export const fakeNews = generateFakeNews(9);
export const fakeServices = generateFakeServices(10);
