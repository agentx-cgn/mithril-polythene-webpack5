import m from 'mithril';
import { $ } from '@app/services';

import './chessboard.cell.scss';

import testImage from '/assets/pictures/chess.test.png';

import { IDefCellComponent } from '@app/domain';

const listener = (e: Event) => {

  const el  = $('board-container') as HTMLElement;
  const img = $('img.fake') as HTMLImageElement;
  const rect = el.getBoundingClientRect();
  const elEval = $('cell-evaluation') as HTMLElement;

  img.style.width  = `${rect.width -24}px`;
  img.style.height = `${rect.width -24}px`;
  elEval.style.minHeight = `${rect.width -24}px`;

  console.log(`${rect.width} - ${rect.height}`);

};

window.addEventListener('resize', listener);

export const ChessboardCell: IDefCellComponent = {

  view ( vnode ) {

    const { className, style } = vnode.attrs;

    return  m('board-container', [
      m('board-container-sizer'),
      m('cell-evaluation', { className }, 'E'),
      m('cell-chessboard', { className, style: 'overflow: hidden' },
        m('img.fake', {style: 'width: 768px; height: 768px', src: testImage})
        // m('img', { style: 'width: 100%; height: 100%', src: testImage} )
      ),
    ]);

  }

};
