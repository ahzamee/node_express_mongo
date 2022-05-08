require('dotenv').config({ silent: true });

export const app = {
    name: 'Fare BD',
    env: process.env.APP_ENV || 'development',
    secret: process.env.APP_SECRET || 'verysecretkey',
    port: process.env.APP_PORT || '4000',
    domain: process.env.APP_DOMAIN || 'http://localhost',
};
export const s3 = {
    public: {
        BUCKET_NAME: process.env.AWS_PUBLIC_BUCKET_NAME,
        BUCKET_REGION: process.env.AWS_PUBLIC_BUCKET_REGION,
        ACCESS_KEY: process.env.AWS_PUBLIC_ACCESS_KEY,
        SECRET_KEY: process.env.AWS_PUBLIC_SECRET_KEY,
        CDN_END_POINT: process.env.AWS_PUBLIC_CDN_ENDPOINT,
    },
};
export const db = {
    mongo: {
        username: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        port: process.env.DB_PORT || '27017',
        host: process.env.DB_HOST || 'localhost',
        dbname: process.env.DB_NAME || 'fareDB',
        ip: process.env.MONGO_IP || 'mongo',
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || '6379',
    },
};
export const mail = {
    from: process.env.EMAIL_ADDRESS || '',
    port: process.env.EMAIL_PORT || 587,
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    transport_method: process.env.EMAIL_TRANSPORT || 'SMTP',
    secure_connection: Boolean(process.env.EMAIL_TLS === 'true'),
    auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASSWORD || 'TestingNodeJs2021',
    },
};
