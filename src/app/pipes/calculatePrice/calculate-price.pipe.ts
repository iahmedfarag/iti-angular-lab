import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePrice',
})
export class CalculatePricePipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    const discount = discountPercentage / 100;
    const finalPrice = price - price * discount;

    return Math.round(finalPrice * 100) / 100;
  }
}
