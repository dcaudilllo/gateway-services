import { Controller, Get, Headers, Param } from '@nestjs/common';
import axios from 'axios';
import ADMIN_BASE_URL from '../../../utils/app.utils';

@Controller('shop')
export class ProductsController {
  private readonly baseUrl = `${ADMIN_BASE_URL}/products`;

  /**
   *
   * @param headers
   */
  @Get('/products')
  async fetchProducts(@Headers() headers?: any) {
    const { data } = await axios.get(`${this.baseUrl}`, {
      headers: headers,
    });
    return data;
  }

  /**
   *
   * @param productId
   * @param headers
   */
  @Get('/products/:productId')
  async fetchProductById(
    @Param('productId') productId,
    @Headers() headers?: any,
  ) {
    const { data } = await axios.get(`${this.baseUrl}/${productId}`, {
      headers: headers,
    });
    return data;
  }

  /**
   *
   * @param headers
   */
  @Get('/products/variants')
  async getVariants(@Headers() headers?: any) {
    const { data } = await axios(`${this.baseUrl}/variants`, {
      headers: headers,
    });
    return data;
  }
}
