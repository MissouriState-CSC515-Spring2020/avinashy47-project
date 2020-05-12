import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export const LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
  };
  export const DEFAULTS = {
      BD_COLOR: 'rgba(51,51,51,0.8)',
      SPINNER_COLOR: '#fff',
      SPINNER_TYPE: 'ball-scale-multiple',
      Z_INDEX: 99999,
  };
  
export type Size = 'default' | 'small' | 'medium' | 'large';
 
export class NgxSpinner {
    name: string;
    bdColor: string;
    size: Size;
    color: string;
    type: string;
    class: string;
    divCount: number;
    divArray: Array<number>;
    fullScreen: boolean;
    show: boolean;
    zIndex: number;
    template: string;
  
    constructor(init?: Partial<NgxSpinner>) {
      Object.assign(this, init);
    }
  }

  export interface Spinner {
    bdColor?: string;
    size?: Size;
    color?: string;
    type?: string;
    fullScreen?: boolean;
    zIndex?: number;
    template?: string;
  }
  export const PRIMARY_SPINNER = 'primary';
@Injectable({
  providedIn: 'root'
})
export class NgxSpinnerService {
  /**
   * Spinner observable
   *
   * @memberof NgxSpinnerService
   */
  private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() { }
  /**
  * Get subscription of desired spinner
  * @memberof NgxSpinnerService
  **/
  getSpinner(name: string): Observable<NgxSpinner> {
    return this.spinnerObservable.asObservable().pipe(filter((x: NgxSpinner) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name: string = PRIMARY_SPINNER, spinner?: Spinner) {
    const showPromise = new Promise((resolve, _reject) => {
      if (spinner && Object.keys(spinner).length) {
        spinner['name'] = name;
        this.spinnerObservable.next(new NgxSpinner({ ...spinner, show: true }));
        resolve(true);
      } else {
        this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
        resolve(true);
      }
    });
    return showPromise;
  }
  /**
  * To hide spinner
  *
  * @memberof NgxSpinnerService
  */
  hide(name: string = PRIMARY_SPINNER, debounce: number = 0) {
    const hidePromise = new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
        resolve(true);
      }, debounce);
    });
    return hidePromise;
  }
}