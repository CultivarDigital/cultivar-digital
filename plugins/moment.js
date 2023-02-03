import 'moment/locale/pt-br'
export default ({ $moment }) => {
  $moment.locale('pt-br');
  // $moment.updateLocale('pt-br', {
  //   relativeTime: {
  //     future: 'daqui %s',
  //     past: '%s',
  //     s: '1 s',
  //     ss: '%d s',
  //     m: '1 m',
  //     mm: '%d m',
  //     h: '1 h',
  //     hh: '%d h',
  //     d: '1 d',
  //     dd: '%d d',
  //     M: '1 mês',
  //     MM: '%d meses',
  //     y: '1 Y',
  //     yy: '%d anos',
  //   },
  // })
}
