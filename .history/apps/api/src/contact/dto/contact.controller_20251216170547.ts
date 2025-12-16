import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  constructor(private service: ContactService) {}

  @Post('contact')
  create(@Body() dto: CreateContactDto) {
    return this.service.create(dto);
  }
}
