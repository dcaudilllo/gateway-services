import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import axios from 'axios';
import ADMIN_BASE_URL from '../../utils/app.utils';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('calculator')
@UseGuards(new AuthGuard())
export class CalculatorController {
  private readonly baseUrl = `${ADMIN_BASE_URL}/calculator`;

  @Post('/jeans')
  @HttpCode(200)
  async getJeansSize(@Body() body) {
    const { data } = await axios.post(`${this.baseUrl}/jeans`, body);
    return data;
  }
}
