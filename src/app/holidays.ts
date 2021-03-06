// Extracted from https://blog.sparksuite.com/json-list-of-holidays-1eddc0ef48e0

export function isHoliday(year: number, month: number, day: number, code: string) {
  if (code !== 'US') { return false; }
  const holiday = HOLIDAYS.static[`${month}/${day}`] || HOLIDAYS.dynamic[`${month}/${day}/${year}`];
  return !!holiday;
}

export const HOLIDAYS = {
  'static': {
    '1/1': 'New Year\'s Day',
    '2/2': 'Groundhog Day',
    '2/14': 'Valentine\'s Day',
    '3/17': 'St. Patrick\'s Day',
    '4/22': 'Earth Day',
    '7/4': 'Independence Day',
    '9/11': 'Patriot Day',
    '10/31': 'Halloween',
    '11/11': 'Veterans\' Day',
    '12/7': 'Pearl Harbor Day',
    '12/25': 'Christmas Day',
    '12/31': 'New Year\'s Eve'
  },
  'dynamic': {
    '1/19/2015': 'MLK Day',
    '1/18/2016': 'MLK Day',
    '1/16/2017': 'MLK Day',
    '1/15/2018': 'MLK Day',
    '1/21/2019': 'MLK Day',
    '1/20/2020': 'MLK Day',
    '2/16/2015': 'Presidents\' Day',
    '2/15/2016': 'Presidents\' Day',
    '2/20/2017': 'Presidents\' Day',
    '2/19/2018': 'Presidents\' Day',
    '2/18/2019': 'Presidents\' Day',
    '2/17/2020': 'Presidents\' Day',
    '5/10/2015': 'Mother\'s Day',
    '5/8/2016': 'Mother\'s Day',
    '5/14/2017': 'Mother\'s Day',
    '5/13/2018': 'Mother\'s Day',
    '5/12/2019': 'Mother\'s Day',
    '5/10/2020': 'Mother\'s Day',
    '5/25/2015': 'Memorial Day',
    '5/30/2016': 'Memorial Day',
    '5/29/2017': 'Memorial Day',
    '5/28/2018': 'Memorial Day',
    '5/27/2019': 'Memorial Day',
    '5/25/2020': 'Memorial Day',
    '6/21/2015': 'Father\'s Day',
    '6/19/2016': 'Father\'s Day',
    '6/18/2017': 'Father\'s Day',
    '6/17/2018': 'Father\'s Day',
    '6/16/2019': 'Father\'s Day',
    '6/21/2020': 'Father\'s Day',
    '9/7/2015': 'Labor Day',
    '9/5/2016': 'Labor Day',
    '9/4/2017': 'Labor Day',
    '9/3/2018': 'Labor Day',
    '9/2/2019': 'Labor Day',
    '9/7/2020': 'Labor Day',
    '10/12/2015': 'Columbus Day',
    '10/10/2016': 'Columbus Day',
    '10/9/2017': 'Columbus Day',
    '10/8/2018': 'Columbus Day',
    '10/14/2019': 'Columbus Day',
    '10/12/2020': 'Columbus Day',
    '11/26/2015': 'Thanksgiving Day',
    '11/24/2016': 'Thanksgiving Day',
    '11/23/2017': 'Thanksgiving Day',
    '11/22/2018': 'Thanksgiving Day',
    '11/28/2019': 'Thanksgiving Day',
    '11/26/2020': 'Thanksgiving Day'
  }
};
