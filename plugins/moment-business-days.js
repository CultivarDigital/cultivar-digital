/* eslint-disable no-console */
import momentBusinessDays from 'moment-business-days'
import feriados from '../data/feriados.json'
export default ({ store, auth, router }, inject) => {
  inject('momentBusinessDays', {
    addDays({ dateStart = new Date(), days }) {
      console.log(Object.keys(feriados));

      momentBusinessDays.updateLocale('pt-br', {
        holidays: Object.keys(feriados),
        holidayFormat: 'YYYY-MM-DD',
        workingWeekdays: [1, 2, 3, 4, 5],
      })
      return momentBusinessDays(dateStart).businessAdd(days)._d
    },
  })
}
