import { envs } from "./envs"

export const NameConfigsService = "CONFIGS_SERVICE"
export const NameInspectionController = "Inspection_CONTROLLER_SERVICE"
export const NameEdificationsController = "EDIFICATIONS_CONTROLLER_SERVICE"
export const NameUsersAuth = "USERS_AUTH"

// Palabra secreta
export const jwtConstants = {
    secret: envs.SECRET_WORD
}