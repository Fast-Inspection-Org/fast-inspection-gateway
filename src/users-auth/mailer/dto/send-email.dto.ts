import { AddressDTO } from "./address.dto"

export class SendEmailDTO {
    from?: AddressDTO // sender address
    to: Array<AddressDTO> // list of receivers
    subject: string // Subject line
    text: string // plain text body
    html: string // html body
}