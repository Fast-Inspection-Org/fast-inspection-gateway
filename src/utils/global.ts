import { envs } from "./envs"

export const NameConfigsService = "CONFIGS_SERVICE"
export const NameBuildingController = "BUILDING_CONTROLLER_SERVICE"
export const NameUsersAuth = "USERS_AUTH"

// Palabra secreta
export const jwtConstants = {
    secret: envs.SECRET_WORD
}