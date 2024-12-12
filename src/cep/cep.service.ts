import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  async fetchCep(cep: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://brasilapi.com.br/api/cep/v1/${cep}`),
      );
      return response.data;
    } catch {
      throw new HttpException('CEP inválido', HttpStatus.BAD_REQUEST);
    }
  }
}
