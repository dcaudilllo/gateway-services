import { Controller, Get, Headers } from '@nestjs/common';
import axios from 'axios';

@Controller('shop')
export class CollectionsController {
  private readonly baseUrl = 'http://sam.solbeautyandcare.com:3000';

  /**
   *
   * @param headers
   */
  @Get('collections')
  async fetchCollections(@Headers() headers?: any) {
    const { data } = await axios(`${this.baseUrl}/collections`, {
      headers: headers,
    });
    return data;
  }
}
