const username = {

    'MGmTbvos2VSQAecLraMW3WR1rLncbuk1aJ': 'TGIC',
    'MKkKysXYEuUEWA3UctCREERjrz1r2cwBiS': '欢乐彩票',
    'MC7kMPonnqTQrojbZw5WdhFUhmj5iUVQu3': '欢乐4+1',
    'MTMijUsYGUmCGGqwfhHyZF73jXX7rK5BgC': '团队',
    'M7uLG9s12buf8bRGST7xS94gHmLxhZWbjz': 'bitker交易所',
    'MJg82TKjDEHEujfmt5yzNuSF3C5MEY1jF2': 'MXC交易所',
    'MUAs7MGArEvYHHnNpLSddnvgzYGd8XG3UD': 'Bitz交易所',
    'MBYLq5mfZgSw6hjrvLZPU2Ur6z99Lpnpps': 'CEO交易所',
    'MMZdwvwTyzBRYd3ZsvL8rgngUAdXwogEWU': '数字资产托管',
    'MBmMXdGyVcDSh7TcwgVJAHA1iKXa56RHa8': '数字资产交换',
    'MBZknz7dA6Q1o6BdQ4So6YByNWRjet34ZS': '基金会'

}

function usernameupdate(keyname){
	var name = username[keyname]
	// console.log(name)
	if(name){
		return username[keyname]
	}else{
		return keyname
	}
}