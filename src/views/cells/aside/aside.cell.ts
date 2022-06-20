import m from 'mithril';

import './aside.cell.scss';
import { IDefCellComponent } from '@app/domain';
import { SectionTitleAtom } from '@app/atoms';

export const AsideCell: IDefCellComponent = {
  view ( vnode ) {

    const { className, style } = vnode.attrs;

    return m('cell-aside', { className, style }, [
      m(SectionTitleAtom, { className: '', style: '', onclick: ()=> {} }, 'Analyzer'),
    ]);

  },
};
