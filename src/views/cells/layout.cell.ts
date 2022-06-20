import m from 'mithril';

import './layout.cell.scss';

import { DatabaseService as DB } from '@app/services';

import { ILayoutComponent } from '@app/domain';
import { LastAtom, NothingAtom } from '@app/atoms';

import { BackdropCell } from './backdrop.cell';
import { StageCell } from './stage.cell';
import { HeaderCell } from './header/header.cell';
import { AsideCell } from './aside/aside.cell';
import { FooterCell } from './footer/footer.cell';
import { SplashCell } from './splash/splash.cell';

const LayoutCell: ILayoutComponent = {

  view ( vnode ) {

    const { center, page, route, params } = vnode.attrs;

    const showSplash = DB.Options.first.ui.waitscreen;

    // console.log('LayoutCell.view', showSplash);

    return m('cell-layout',

      !showSplash
        ? [
          m(BackdropCell),
          m(HeaderCell, { route, params }),
          m('main', [
            m('section.stage',   {}, m(StageCell)),
            m('section.content', {}, innerWidth >= 720 ? m( center )  : m(NothingAtom)),
            m('section.aside',   {}, innerWidth >= 720 ? m(AsideCell) : m(NothingAtom))
          ]),
          m(FooterCell),
          m(LastAtom, { msecs: Date.now() }),
        ]
        : [
          m(BackdropCell),
          m(SplashCell),
          m(LastAtom, { msecs: Date.now() }),
        ]
      );

  },

};

export { LayoutCell };
