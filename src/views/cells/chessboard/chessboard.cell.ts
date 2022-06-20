import m from 'mithril';

import './chessboard.cell.scss';

import { IDefCellComponent } from '@app/domain';

export const ChessboardCell: IDefCellComponent = {

  view ( vnode ) {

    const { className, style } = vnode.attrs;

    return  m('div', { style: 'width: 100%; flex: 0 0;' }, [
      m('div', { style: 'padding-bottom: 100%; width: 0; float: left' }),
      m('cell-chessboard', { className, style }, 'CHESSBOARD'),
    ]);

  }

};
