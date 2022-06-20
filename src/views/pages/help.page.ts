import m from 'mithril';

import { FactoryService } from '@app/services';
import { SectionTitleAtom, SpacerAtom } from '@app/atoms';
import { IPageAttrs } from '@app/domain';

const HelpPage = FactoryService.create<IPageAttrs>('Help', {

  view ( vnode ) {

    return m('div.page.help', vnode.attrs,
      m(SectionTitleAtom, 'Help'),
      m(SpacerAtom),
    );

    // let { url } = vnode.attrs;
    // url = decodeURIComponent(url);
    // console.log('info', url);

    // // return m('iframe.w-100.h-100', {srcdoc: decodeURI(url), style: 'border:0; padding:0'});
    // return m('iframe.w-100.h-100', {src: 'https://en.wikipedia.org/w/index.php?title=Gamergate_controversy&diff=650003294&oldid=649972067', style: 'border:0; padding:0'});

  },
});

export { HelpPage };
