
//--修改该属性 连接公司或者客户的服务器
var _isDev_ = true;

window.config =  (function(){
	var config_dev = {
		host: 'http://61.155.169.52:8080', // 245.60
		serviceHost:'http://61.155.169.52:8090',
		dataAddress:"vpn.superng.cn:9188",
		//dataAddress:"192.168.1.223:10706",
		token: '79fb054e94d0284966a416a852a6924a',
		resource: 'http://61.155.169.52:8080/seie/markers/',
		activewk: 1002,
		sequenceWk:1003,//
		layers:{
			threedlayer:"http://58.61.27.91:8457//dapeng_map/dapeng_3D/_alllayers/",
			imagelayer:{
				18:"http://61.155.169.52:8090/seis/v3/wmts/service/1016/3",
				16:"http://61.155.169.52:8090/seis/v3/wmts/service/1015/3",
				15:"http://61.155.169.52:8090/seis/v3/wmts/service/1015/3",
				14:"http://61.155.169.52:8090/seis/v3/wmts/service/1013/1",
				13:"http://61.155.169.52:8090/seis/v3/wmts/service/1012/1"
			},
			
			roadlayer:"http://61.155.169.52:8090/seis/v3/wmts/tile/1003/2"
		},
		defaultBaselayer:'threedlayer', //--当前的默认底图
		maxBBOX:{//--大鹏区域范围
			'threedlayer':[[22.43674, 114.32888], [22.67961, 114.64000]],
			'imagelayer':[[22.42261, 114.29232], [22.69338, 114.6516]],
			'boundarylayer':[[22.42261, 114.29232], [22.69338, 114.6516]]
		}
		
	}
	var __host__ = "http://192.168.65.34:8080";
	var config_prod = {
		host: __host__, // 245.60
		dataAddress:"192.168.65.34:10006",
		token: 'guest',
		resource: __host__+"/seie/markers/",
		activewk: 1002,
		sequenceWk:1003,//
		layers:{
			threedlayer:"http://58.61.27.91:8457//dapeng_map/dapeng_3D/_alllayers/",
			imagelayer:{
				18:__host__+"/seis/v3/wmts/service/1014/1",
				16:__host__+"/seis/v3/wmts/service/1013/1",
				15:__host__+"/seis/v3/wmts/service/1012/1",
				14:__host__+"/seis/v3/wmts/service/1011/1",
				13:__host__+"/seis/v3/wmts/service/1010/1"
			},
			roadlayer:__host__+"/seis/v3/wmts/tile/1008/1"
		},
		defaultBaselayer:'threedlayer', //--当前的默认底图
		maxBBOX:{//--大鹏区域范围
			'threedlayer':[[22.43674, 114.32888], [22.67961, 114.64000]],
			'imagelayer':[[22.42261, 114.29232], [22.69338, 114.6516]],
			'boundarylayer':[[22.42261, 114.29232], [22.69338, 114.6516]]
		}
		
	}
	return _isDev_ ? config_dev :config_prod;
})()