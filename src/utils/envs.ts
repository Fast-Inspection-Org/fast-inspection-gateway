import * as dotenv from 'dotenv';


dotenv.config();

interface EnvVars {
    CONFIGS_SERVICE_HOST: string
    CONFIGS_SERVICE_PORT: string
    PORT: string
    BUILDING_CONTROLLER_HOST: string
    BUILDING_CONTROLLER_PORT: string
    USERS_AUTH_HOST: string
    USERS_AUTH_PORT: string
    SECRET_WORD: string
}

export const envs: EnvVars = {
    CONFIGS_SERVICE_HOST: process.env.CONFIGS_SERVICE_HOST,
    CONFIGS_SERVICE_PORT: process.env.CONFIGS_SERVICE_PORT,
    PORT: process.env.PORT,
    BUILDING_CONTROLLER_HOST: process.env.BUILDING_CONTROLLER_HOST,
    BUILDING_CONTROLLER_PORT: process.env.BUILDING_CONTROLLER_PORT,
    USERS_AUTH_HOST: process.env.USERS_AUTH_HOST,
    USERS_AUTH_PORT: process.env.USERS_AUTH_PORT,
    SECRET_WORD: process.env.SECRET_WORD
}