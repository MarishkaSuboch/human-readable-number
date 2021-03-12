module.exports = function toReadable (number) {
  let str = String(number);
  let array = str.split('');
  let res = '';

  switch(array.length)
  {
    case 3:
        res+= hundred(array);
        break;
    case 2:
        res+= tens(array);
        break;
    case 1:
        res+= convert(array[0]);
        break;
  }
  return res;
}

function hundred(n)
{
    let res = convert(n[0]) + ' hundred';
    res += tens([n[1],n[2]], true);
    return res;
}

function tens(n, h)
{
    let res = h ? ' ': ''
    if(n[0] === '0' && n[1] === '0') return '';
    if(n[0] === '1')
    {
        return (res += convert(n[0]+n[1]));
    }
    if(n[1] === '0')
    {
        return (res += convert(n[0], true));
    }
    if(n[0] === '0')
    {
        return (res += convert(n[1]));
    }
    res+=convert(n[0], true);
    res+=' ' + convert(n[1]);
    return res;
}

function convert(n, d)
{
    switch(n)
    {
        case '0':
            return d ? '' : 'zero';
        case '1':
            return 'one';
        case '2':
            return d ? 'twenty':'two';
        case '3':
            return d ? 'thirty' : 'three';
        case '4':
            return d ? 'forty' : 'four';
        case '5':
            return d ? 'fifty' : 'five';
        case '6':
            return d ? 'sixty' : 'six';
        case '7':
            return d ? 'seventy' : 'seven';
        case '8':
            return d ? 'eighty' : 'eight';
        case '9':
            return d ? 'ninety' : 'nine';
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';    
    }
}
