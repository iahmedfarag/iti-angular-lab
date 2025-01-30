import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
})
export class StarRatingPipe implements PipeTransform {
  transform(rating: number, maxStars: number = 5): string {
    const fullStars = '★'.repeat(Math.floor(rating));
    const halfStar = rating % 1 >= 0.5 ? '☆' : '';
    const emptyStars = '☆'.repeat(maxStars - Math.ceil(rating));

    return fullStars + halfStar + emptyStars;
  }
}
