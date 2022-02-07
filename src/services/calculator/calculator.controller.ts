import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import axios from 'axios';
import ADMIN_BASE_URL from '../../utils/app.utils';

@Controller('calculator')
export class CalculatorController {
  private readonly baseUrl = `${ADMIN_BASE_URL}/calculator`;

  @Post('/jeans')
  @HttpCode(200)
  async getJeansSize(@Body() body) {
    const { data } = await axios.post(`${this.baseUrl}/jeans`, body);
    return data;
  }
}
