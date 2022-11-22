let data = {
selectedProgram: 0.1,
programs: {
	base: 0.1,
	it: 0.047,
	gov: 0.067,
	zero: 0.12
},
};

function getData(){
	//возвр объект, куда деструктуризирую data
	//чтобы передать в контроллер не ссылку на data, а его копию
	return {...data};
}


function setData(newData) {
	console.log('New Data', newData);
	data = {
		...data,
		...newData,
	};

	console.log('Updated Data', data);
}

export{getData, setData};
