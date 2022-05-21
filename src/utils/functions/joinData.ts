export function joinData (data:any) {
	let dataArr = [] as any;
	data.parentEntityLongIds.forEach((item: any, index:any) => {
			dataArr.push({
				id: data.entityLongIds[index],
				label: data.labels[index],
				parentId: item,
			});
	});
	return [
		...dataArr,
	];
}
