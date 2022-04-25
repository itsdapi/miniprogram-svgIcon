// svg-icon/svg-icon.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		src:{type: String, value:""},
		color:{type: String, value:""},
		size:{type: String, value:"32"}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	},

	lifetimes: {
		attached() {
			let path = this.data.src
			if (path.startsWith('/')) {
				path = path.substring(1, path.length)
			}
			wx.getFileSystemManager().readFile({
				filePath: path,
				encoding: 'base64',
				success: res => {
				this.setData({
					data: 'data:image/svg+xml;base64,' + res.data
				})
				},
				fail: res => {
				console.log('i-icon load fail, res = ', res)
				}	
			})
		}
	}
})
