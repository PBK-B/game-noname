'use strict';
character.sp={
	connect:true,
	character:{
		yangxiu:['male','wei',3,['jilei','danlao']],
		chenlin:['male','wei',3,['bifa','songci']],
		caohong:['male','wei',4,['yuanhu']],
		xiahouba:['male','shu',4,['baobian']],
		yuanshu:['male','qun',4,['xinyongsi','yjixi']],
		sp_diaochan:['female','qun',3,['lihun','biyue']],
		sp_zhaoyun:['male','qun',3,['longdan','chongzhen']],
		jsp_zhaoyun:['male','qun',3,['chixin','yicong','suiren']],
		liuxie:['male','qun',3,['tianming','mizhao']],
		zhugejin:['male','wu',3,['hongyuan','huanshi','mingzhe']],
		zhugeke:['male','wu',3,['aocai','duwu']],
		guanyinping:['female','shu',3,['huxiao','xueji','wuji']],
		simalang:['male','wei',3,['junbing','quji']],
		zhangxingcai:['female','shu',3,['shenxian','qiangwu']],
		fuwan:['male','qun',4,['moukui']],
		sp_sunshangxiang:['female','shu',3,['liangzhu','fanxiang']],
		caoang:['male','wei',4,['kaikang']],
		re_yuanshu:['male','qun',4,['wangzun','tongji']],
		sp_caoren:['male','wei',4,['kuiwei','yanzheng']],
		zhangbao:['male','qun',3,['zhoufu','yingbin']],
		zhangliang:['male','qun',3,['fulu','fuji']],
		maliang:['male','shu',3,['xiemu','naman']],
		sp_pangtong:['male','qun',3,['manjuan','zuixiang']],
		zhugedan:['male','wei',4,['gongao','juyi']],
		sp_jiangwei:['male','shu',4,['kunfen','fengliang']],
		sp_machao:['male','qun',4,['zhuiji','cihuai']],
		sunhao:['male','wu',5,['canshi','chouhai','guiming']],
		shixie:['male','qun',3,['biluan','lixia']],
		mayunlu:['female','shu',4,['fengpo','mashu']],
		zhanglu:['male','qun',3,['yishe','bushi','midao']],
		wutugu:['male','qun',15,['ranshang','hanyong']],
		sp_caiwenji:['female','wei',3,['chenqing','mozhi']],
		zhugeguo:['female','shu',3,['yuhua','qirang']],
		liuzan:['male','wu',4,['fenyin']],
		lingcao:['male','wu',4,['dujin']],
		sunru:['female','wu',3,['yingjian','shixin']],
		lingju:['female','qun',3,['jieyuan','fenxin']],
		lifeng:['male','shu',3,['tunchu','shuliang']],
		cuiyan:['male','wei',3,['yawang','xunzhi']],
		sp_zhangfei:['male','shu',4,['jie','dahe']],
		jsp_guanyu:['male','wei',4,['wusheng','danji']],
		jsp_huangyueying:['female','qun',3,['jiqiao','linglong']],
		sunluyu:['female','wu',3,['meibu','mumu']],
		hanba:['female','qun',4,['fentian','zhiri']],
		zumao:['male','wu',4,['yinbing','juedi']],
		wenpin:['male','wei',4,['zhenwei']],
		daxiaoqiao:['female','wu',3,['xingwu','luoyan']],
		sp_daqiao:['female','wu',3,['yanxiao','anxian']],
		sp_ganning:['male','wu',4,['yinling','junwei']],
		sp_xiahoudun:['male','wei',4,['fenyong','xuehen']],
		sp_lvmeng:['male','wu',3,['tanhu','mouduan']],
		wangji:['male','wei',3,['qizhi','jinqu']],

		guansuo:['male','shu',4,['zhengnan','xiefang']],
		tadun:['male','qun',4,['luanzhan']],
		yanbaihu:['male','qun',4,['zhidao','jili']],
		chengyu:['male','wei',3,['shefu','benyu']],

		wanglang:['male','wei',3,['gushe','jici']],
		sp_pangde:['male','wei',4,['mashu','juesi']],
		sp_jiaxu:['male','wei',3,['zhenlue','jianshu','yongdi']],

		litong:['male','wei',4,['tuifeng']],
		mizhu:['male','shu',3,['ziyuan','jugu']],
		buzhi:['male','wu',3,['hongde','dingpan']],

		sp_liubei:['male','shu',4,['zhaolie','shichou']],
		caochun:['male','wei',4,['shanjia']],
		zhuling:['male','wei',4,['zhanyi']],
		dongbai:['female','qun',3,['lianzhu','xiehui']],

		zhaoxiang:['female','shu',4,['fanghun','fuhan']],
		mazhong:['male','shu',4,['fuman']],
		dongyun:['male','shu',3,['bingzheng','sheyan']],
		// kanze:['male','wu',3,[]],
		heqi:['male','wu',4,['qizhou','shanxi']],
	},
	perfectPair:{
		zhugejin:['zhugeke'],
		guanyinping:['guanyu'],
		zhangxingcai:['liushan'],
		fuwan:['fuhuanghou'],
		sunshangxiang:['liubei'],
		caoang:['caocao'],
		zhangbao:['zhangliang','zhangjiao'],
		zhangliang:['zhangjiao'],
		maliang:['masu'],
		lingcao:['lingtong'],
		lingju:['diaochan','lvbu'],
		jiangqing:['zhoutai'],
		dingfeng:['xusheng'],
		caohong:['caoren'],
		daxiaoqiao:['zhouyu','sunce'],
		cuiyan:['caocao'],
		guansuo:['guanyu'],
		mateng:['machao','madai','mayunlu'],
		madai:['mayunlu'],
		chengpu:['zhouyu'],
		hanba:['swd_muyun'],
		dongbai:['dongzhuo']
	},
	skill:{
		sheyan:{
			trigger:{global:'useCard'},
			filter:function(event,player){
				if(!event.targets||!event.targets.contains(player)) return false;
				var info=get.info(event.card);
				if(info.type!='trick') return false;
				if(info.multitarget) return false;
				return game.hasPlayer(function(current){
					return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current);
				});
			},
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('sheyan'),function(card,player,target){
					return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
				}).set('ai',function(target){
					var trigger=_status.event.getTrigger();
					return ai.get.effect(target,trigger.card,trigger.player,player);
				});
				'step 1'
				if(result.bool){
					if(!event.isMine()) game.delay(0.5);
					event.target=result.targets[0];
				}
				else{
					event.finish();
				}
				'step 2'
				player.logSkill('sheyan',event.target);
				trigger.targets.push(event.target);
			}
		},
		bingzheng:{
			trigger:{player:'phaseUseEnd'},
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('bingzheng'),function(card,player,target){
					return target!=player&&target.num('h')!=target.hp;
				}).set('ai',function(target){
					var player=_status.event.player;
					var att=ai.get.attitude(player,target);
					if(att>0&&target.num('h')==target.hp-1){
						return att+2;
					}
					return att;
				});
				'step 1'
				if(result.bool){
					player.logSkill('bingzheng',result.targets);
					event.target=result.targets[0];
					if(event.target.num('h')){
						event.target.chooseToDiscard('弃置一张手牌，或取消并摸一张牌').set('ai',function(card){
							if(card.name=='du') return 0;
							if(_status.event.goon) return 6-ai.get.value(card);
							return 0;
						}).set('goon',(
							event.target.num('h')==event.target.hp+1&&
							ai.get.attitude(event.target,player)>1&&
							!player.needsToDiscard()&&player.num('h')<event.target.num('h')
						));
					}
					else{
						event.directfalse=true;
					}
				}
				else{
					event.finish();
				}
				'step 2'
				if(event.directfalse||!result.bool){
					event.target.draw();
				}
				'step 3'
				if(event.target.num('h')==event.target.hp){
					player.draw();
					var next=player.chooseCard('交给'+get.translation(event.target)+'一张牌','he');
					next.set('ai',function(card){
						if(_status.event.shan){
							return card.name=='shan'?1:0;
						}
						if(_status.event.goon){
							return 10-ai.get.value(card);
						}
						return 0;
					});
					if(ai.get.attitude(player,event.target)>1&&
						player.num('h','shan')>1&&player.num('h')>event.target.num('h')){
						next.set('shan',true);
					}
					if(ai.get.attitude(player,event.target)>0&&player.needsToDiscard()){
						next.set('goon',true);
					}
				}
				else{
					event.finish();
				}
				'step 4'
				if(result.bool){
					event.target.gain(result.cards,player);
					player.$giveAuto(result.cards,event.target);
				}
			},
			ai:{
				threaten:1.4
			}
		},
		fuman:{
			enable:'phaseUse',
			filterTarget:function(card,player,target){
				return !target.hasSkill('fuman2')&&target!=player;
			},
			filter:function(event,player){
				return player.num('h','sha');
			},
			discard:false,
			prepare:'give',
			filterCard:{name:'sha'},
			content:function(){
				target.gain(cards,player);
				target.storage.fuman3=cards[0];
				target.storage.fuman2=player;
				target.addTempSkill('fuman2',{player:'phaseAfter'});
			},
			check:function(card){
				return 6-ai.get.value(card);
			},
			ai:{
				order:2,
				result:{
					target:function(player,target){
						if(!target.hasSha()) return 1.2;
						return 1;
					}
				}
			}
		},
		fuman2:{
			trigger:{player:'useCard'},
			forced:true,
			popup:false,
			filter:function(event,player){
				return event.card==player.storage.fuman3&&player.storage.fuman2.isIn();
			},
			mark:true,
			intro:{
				content:'下个回合结束之前使用“抚蛮”牌时，令$一张牌'
			},
			content:function(){
				'step 0'
				game.delay(0.5);
				'step 1'
				player.line(player.storage.fuman2,'green');
				player.storage.fuman2.draw();
				player.storage.fuman2.logSkill('fuman');
			},
			onremove:function(player){
				delete player.storage.fuman2;
				delete player.storage.fuman3;
			},
			ai:{
				effect:{
					player:function(card,player,target,current){
						if(card.name=='sha'&&card!=player.storage.fuman3&&
						player.storage.fuman2.isIn()&&ai.get.attitude(player,player.storage.fuman2)>0){
							return 'zeroplayertarget';
						}
					}
				}
			}
		},
		qizhou:{
			trigger:{player:['phaseBefore','equipAfter','loseAfter']},
			forced:true,
			popup:false,
			filter:function(event,player){
				if(player.equiping) return false;
				var suits=[];
				var es=player.get('e');
				for(var i=0;i<es.length;i++){
					suits.add(get.suit(es[i]));
				}
				if(player.additionalSkills.qizhou){
					return player.additionalSkills.qizhou.length!=suits.length;
				}
				else{
					return suits.length>0;
				}
			},
			content:function(){
				var suits=[];
				var es=player.get('e');
				for(var i=0;i<es.length;i++){
					suits.add(get.suit(es[i]));
				}
				player.removeAdditionalSkill('qizhou');
				switch(suits.length){
					case 1:player.addAdditionalSkill('qizhou',['mashu']);break;
					case 2:player.addAdditionalSkill('qizhou',['mashu','reyingzi']);break;
					case 3:player.addAdditionalSkill('qizhou',['mashu','reyingzi','duanbing']);break;
					case 4:player.addAdditionalSkill('qizhou',['mashu','reyingzi','duanbing','fenwei']);break;
				}
			},
			ai:{
				threaten:1.2
			}
		},
		shanxi:{
			enable:'phaseUse',
			usable:1,
			filterCard:{color:'red',type:'basic'},
			filterTarget:function(card,player,target){
				return target!=player&&target.num('he')&&get.distance(player,target,'attack')<=1;
			},
			check:function(card){
				return 6-ai.get.value(card);
			},
			content:function(){
				'step 0'
				player.discardPlayerCard(target,true);
				'step 1'
				if(result.bool){
					if(result.cards[0].name=='shan'){
						var hs=target.get('h');
						if(hs.length){
							player.viewCards(get.translation(target)+'的手牌',hs);
						}
					}
					else{
						var hs=player.get('h');
						if(hs.length){
							target.viewCards(get.translation(player)+'的手牌',hs);
						}
					}
				}
			},
			ai:{
				order:8,
				result:{
					target:-1
				}
			}
		},
		fenxun:{
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return target!=player;
			},
			content:function(){
				player.storage.fenxun2=target;
				player.addTempSkill('fenxun2','phaseAfter');
			},
			check:function(card){
				if(card.name=='sha'&&_status.event.player.num('h','sha')==0) return 0;
				return 6-ai.get.value(card);
			},
			filterCard:true,
			ai:{
				order:4,
				result:{
					player:function(player,target){
						if(get.distance(player,target)<=1) return 0;
						var hs=player.get('h','shunshou');
						if(hs.length&&player.canUse(hs[0],target,false)){
							return 1;
						}
						var geteff=function(current){
							return ai.get.effect(current,{name:'sha'},player,player)>0;
						}
						if(player.hasSha()&&geteff(target)){
							var num=game.countPlayer(function(current){
								return current!=player&&get.distance(player,current)<=1&&geteff(current);
							});
							if(num==0){
								if(game.hasPlayer(function(current){
									return player.canUse('sha',current)&&geteff(current)&&current!=target;
								})){
									return 1;
								}
							}
							else if(num==1){
								return 1;
							}
						}
						return 0;
					}
				}
			}
		},
		fenxun2:{
			mark:'character',
			onremove:true,
			intro:{
				content:'到$的距离视为1'
			},
			mod:{
				globalFrom:function(from,to){
					if(to==from.storage.fenxun2){
						return -Infinity;
					}
				}
			}
		},
		duanbing:{
			trigger:{player:'useCard'},
			filter:function(event,player){
				if(event.card.name!='sha') return false;
				return game.hasPlayer(function(current){
					return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse('sha',current);
				});
			},
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('duanbing'),function(card,player,target){
					return !_status.event.source.contains(target)&&get.distance(player,target)<=1&&player.canUse('sha',target);
				}).set('source',trigger.targets).set('ai',function(target){
					var player=_status.event.player;
					return ai.get.effect(target,{name:'sha'},player,player);
				});
				'step 1'
				if(result.bool){
					if(!event.isMine()&&!_status.connectMode) game.delay(0.5);
					event.target=result.targets[0];
				}
				else{
					event.finish();
				}
				'step 2'
				player.logSkill('duanbing',event.target);
				trigger.targets.push(event.target);
			},
			ai:{
				effect:{
					player:function(card,player,target){
						if(card.name=='sha'){
							if(player._duanbingtmp) return;
							player._duanbingtmp=true;
							if(ai.get.effect(target,{name:'sha'},player,player)<=0){
								delete player._duanbingtmp;
								return;
							}
							if(game.hasPlayer(function(current){
								return current!=target&&get.distance(player,current)<=1&&
								player.canUse('sha',current)&&ai.get.effect(current,{name:'sha'},player,player)>0;
							})){
								delete player._duanbingtmp;
								return [1,1];
							}
							delete player._duanbingtmp;
						}
					}
				}
			}
		},
		fuhan:{
			trigger:{player:'phaseBefore'},
			unique:true,
			skillAnimation:true,
			forceunique:true,
			filter:function(event,player){
				return player.storage.fanghun2>0;
			},
			prompt:function(event,player){
				var num=player.storage.fanghun2;
				var mode=get.mode();
				if(mode!='chess'&&mode!='tafang'&&mode!='stone'){
					num=Math.min(num,game.players.length+game.dead.length);
				}
				return get.prompt('fuhan')+'（体力上限：'+num+'）';
			},
			check:function(event,player){
				if(player.storage.fanghun2==1) return false;
				if(player.hp<=1) return true;
				if(player.storage.fanghun2==2) return false;
				if(player.storage.fanghun2==3) return player.hp<3&&player.isLowestHp();
				return true;
			},
			content:function(){
				'step 0'
				var list=[];
				for(var i in lib.character){
					if(!lib.filter.characterDisabled(i)&&lib.character[i][1]=='shu'){
						list.push(i);
					}
				}
				var players=game.players.concat(game.dead);
				for(var i=0;i<players.length;i++){
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				var dialog=ui.create.dialog('将武将牌替换为一名角色','hidden');
				dialog.add([list.randomGets(5),'character']);
				player.chooseButton(dialog,true).ai=function(button){
					return get.rank(button.link,true)-lib.character[button.link][2];
				};
				player.awakenSkill('fuhan');
				'step 1'
				var num=player.storage.fanghun2;
				var mode=get.mode();
				if(mode!='chess'&&mode!='tafang'&&mode!='stone'){
					num=Math.min(num,game.players.length+game.dead.length);
				}
				game.broadcastAll(function(player,name,num){
					player.reinit('zhaoxiang',name,num);
				},player,result.links[0],num);
			}
		},
		fanghun:{
			init:function(player){
				player.storage.fanghun=0;
				player.storage.fanghun2=0;
			},
			intro:{
				content:'mark'
			},
			trigger:{source:'damageAfter'},
			forced:true,
			filter:function(event){
				return event.card&&event.card.name=='sha';
			},
			content:function(){
				player.storage.fanghun++;
				player.markSkill('fanghun');
			},
			group:['fanghun_sha','fanghun_shan','fanghun_draw'],
			subSkill:{
				draw:{
					trigger:{player:['useCard','respond']},
					forced:true,
					popup:false,
					filter:function(event){
						return event.skill=='fanghun_sha'||event.skill=='fanghun_shan';
					},
					content:function(){
						player.draw();
						player.storage.fanghun2++;
					}
				},
				sha:{
					enable:['chooseToUse','chooseToRespond'],
					filterCard:{name:'shan'},
					viewAs:{name:'sha'},
					viewAsFilter:function(player){
						if(!player.storage.fanghun) return false;
						if(!player.num('h','shan')) return false;
					},
					prompt:'将一张闪当杀使用或打出',
					onuse:function(result,player){
						player.storage.fanghun--;
						if(!player.storage.fanghun){
							player.unmarkSkill('fanghun');
						}
						else{
							player.updateMarks();
						}
					},
					check:function(){return 1},
					ai:{
						effect:{
							target:function(card,player,target,current){
								if(get.tag(card,'respondSha')&&current<0) return 0.6
							}
						},
						respondSha:true,
						skillTagFilter:function(player){
							if(!player.storage.fanghun) return false;
							if(!player.num('h','shan')) return false;
						},
						order:3.1,
						useful:-1,
						value:-1
					}
				},
				shan:{
					enable:['chooseToRespond'],
					filterCard:{name:'sha'},
					viewAs:{name:'shan'},
					prompt:'将一张杀当闪打出',
					viewAsFilter:function(player){
						if(!player.storage.fanghun) return false;
						if(!player.num('h','sha')) return false;
					},
					onrespond:function(result,player){
						player.storage.fanghun--;
						if(!player.storage.fanghun){
							player.unmarkSkill('fanghun');
						}
						else{
							player.updateMarks();
						}
					},
					check:function(){return 1},
					ai:{
						respondShan:true,
						skillTagFilter:function(player){
							if(!player.storage.fanghun) return false;
							if(!player.num('h','sha')) return false;
						},
						effect:{
							target:function(card,player,target,current){
								if(!player.storage.fanghun) return false;
								if(get.tag(card,'respondShan')&&current<0) return 0.6
							}
						},
						order:4,
						useful:-1,
						value:-1
					}
				}
			}
		},
		yjixi:{
			init:function(player){
				player.storage.yjixi=0;
				player.storage.yjixi2=false;
			},
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.storage.yjixi>=3;
			},
			skillAnimation:true,
			unique:true,
			content:function(){
				'step 0'
				player.awakenSkill('yjixi');
				player.gainMaxHp();
				player.recover();
				'step 1'
				var str='摸两张牌';
				var mode=get.mode();
				var choice='选项一';
				if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
					var list=[];
					var zhu=get.zhu(player);
					if(zhu&&zhu!=player&&zhu.skills){
						for(var i=0;i<zhu.skills.length;i++){
							if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
								list.push(zhu.skills[i]);
							}
						}
					}
					if(list.length){
						str+='并获得技能'+get.translation(list);
						event.list=list;
						choice='选项二';
					}
				}
				player.chooseControl(function(event,player){
					return _status.event.choice;
				}).set('choiceList',['获得技能妄尊',str]).set('choice',choice);
				'step 2'
				if(result.control=='选项一'){
					player.addSkill('wangzun');
					player.popup('wangzun');
				}
				else{
					player.draw(2);
					player.addSkill(event.list);
					player.popup(event.list[0]);
					player.storage.zhuSkill_yjixi=event.list;
				}
			},
			group:['yjixi_count1','yjixi_count2'],
			subSkill:{
				count1:{
					trigger:{player:'phaseBegin'},
					forced:true,
					popup:false,
					silent:true,
					content:function(){
						player.storage.yjixi++;
						player.storage.yjixi2=false;
					}
				},
				count2:{
					trigger:{player:'loseHpAfter'},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player){
						return !player.storage.yjixi2;
					},
					content:function(){
						player.storage.yjixi--;
						player.storage.yjixi2=true;
					}
				}
			}
		},
		xinyongsi:{
			group:['xinyongsi1','xinyongsi2'],
		},
		xinyongsi1:{
			audio:'yongsi1',
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				trigger.num+=num-2;
			}
		},
		xinyongsi2:{
			audio:'yongsi2',
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			check:function(){
				return false;
			},
			content:function(){
				'step 0'
				player.chooseToDiscard('he','庸肆：弃置一张牌，或取消并失去一点体力').ai=function(card){
					return 8-ai.get.value(card);
				};
				'step 1'
				if(!result.bool){
					player.loseHp();
				}
			}
		},
		lianzhu:{
			enable:'phaseUse',
			usable:1,
			filterCard:true,
			position:'he',
			filterTarget:function(card,player,target){
				return target!=player;
			},
			check:function(card){
				var num=ai.get.value(card);
				if(get.color(card)=='black'){
					if(num>=6) return 0;
					return 20-num;
				}
				else{
					if(_status.event.player.needsToDiscard()){
						return 7-num;
					}
				}
				return 0;
			},
			discard:false,
			prepare:'give',
			content:function(){
				'step 0'
				target.gain(cards,player);
				if(get.color(cards[0])=='black'){
					target.chooseToDiscard(2,'he','弃置两张牌，或令'+get.translation(player)+'摸两张牌').set('ai',function(card){
						if(_status.event.goon) return 7-ai.get.value(card);
						return 0;
					}).set('goon',ai.get.attitude(target,player)<0);
				}
				else{
					event.finish();
				}
				'step 1'
				if(!result.bool){
					player.draw(2);
				}
			},
			ai:{
				order:8,
				expose:0.2,
				result:{
					target:function(player,target){
						if(ui.selected.cards.length&&get.color(ui.selected.cards[0])=='red'){
							if(target.num('h')<player.num('h')) return 1;
							return 0.5;
						}
						return -1;
					}
				}
			}
		},
		xiehui:{
			mod:{
				maxHandcard:function(player,num){
					var hs=player.get('h');
					for(var i=0;i<hs.length;i++){
						if(get.color(hs[i])=='black'){
							num++;
						}
					}
					return num;
				},
			},
			trigger:{global:'gainBegin'},
			forced:true,
			popup:false,
			filter:function(event,player){
				if(event.source==player&&event.player!=player){
					for(var i=0;i<event.cards.length;i++){
						if(get.color(event.cards[i])=='black') return true;
					}
				}
				return false;
			},
			content:function(){
				trigger.player.addSkill('xiehui2');
				if(!trigger.player.storage.xiehui2){
					trigger.player.storage.xiehui2=[];
				}
				for(var i=0;i<trigger.cards.length;i++){
					if(get.color(trigger.cards[i])=='black'){
						trigger.player.storage.xiehui2.add(trigger.cards[i]);
					}
				}
			}
		},
		xiehui2:{
			mark:true,
			intro:{
				content:'不能使用、打出或弃置获得的黑色牌',
				nocount:true
			},
			mod:{
				cardDiscardable:function(card,player){
					if(player.storage.xiehui2&&player.storage.xiehui2.contains(card)) return false;
				},
				cardEnabled:function(card,player){
					if(player.storage.xiehui2&&player.storage.xiehui2.contains(card)) return false;
				},
				cardUsable:function(card,player){
					if(player.storage.xiehui2&&player.storage.xiehui2.contains(card)) return false;
				},
				cardRespondable:function(card,player){
					if(player.storage.xiehui2&&player.storage.xiehui2.contains(card)) return false;
				},
				cardSavable:function(card,player){
					if(player.storage.xiehui2&&player.storage.xiehui2.contains(card)) return false;
				},
			},
			group:['xiehui3','xiehui4']
		},
		xiehui3:{
			trigger:{player:'changeHp'},
			forced:true,
			popup:false,
			filter:function(event){
				return event.num<0;
			},
			content:function(){
				player.removeSkill('xiehui2');
				delete player.storage.xiehui2;
			}
		},
		xiehui4:{
			trigger:{player:'loseEnd'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				if(player.storage.xiehui2){
					for(var i=0;i<player.storage.xiehui2.length;i++){
						if(trigger.cards.contains(player.storage.xiehui2[i])){
							player.storage.xiehui2.splice(i--,1);
						}
					}
				}
				// player.updateMarks();
			}
		},
		shanjia:{
			init:function(player){
				player.storage.shanjia=0;
			},
			mark:true,
			intro:{
				content:function(storage){
					if(storage==0) return '未使用过装备牌';
					return '已使用过'+storage+'张装备牌';
				}
			},
			group:'shanjia2',
			trigger:{player:'phaseUseBegin'},
			frequent:true,
			filter:function(event,player){
				return player.storage.shanjia>0;
			},
			content:function(){
				'step 0'
				player.draw(player.storage.shanjia);
				'step 1'
				player.chooseToDiscard('he',player.storage.shanjia,true);
				'step 2'
				var useCard=false;
				if(result.bool&&result.cards){
					for(var i=0;i<result.cards.length;i++){
						if(result.cards[i].original=='e'){
							useCard=true;break;
						}
					}
				}
				if(useCard){
					player.chooseTarget('是否视为使用一张杀？',function(card,player,target){
						return lib.filter.targetEnabled({name:'sha'},player,target);
					}).set('ai',function(target){
						return ai.get.effect(target,{name:'sha'},_status.event.player);
					});
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool){
					player.useCard({name:'sha'},result.targets,false);
				}
			},
			ai:{
				threaten:function(player,target){
					if(typeof target.storage.shanjia=='number'){
						return Math.min(2,Math.sqrt(1+target.storage.shanjia));
					}
				}
			}
		},
		shanjia2:{
			trigger:{player:'useCard'},
			forced:true,
			popup:false,
			silent:true,
			filter:function(event,player){
				return get.type(event.card)=='equip'&&player.storage.shanjia<7;
			},
			content:function(){
				player.storage.shanjia++;
				player.updateMarks();
			}
		},
		zhanyi:{
			enable:'phaseUse',
			usable:1,
			filterCard:true,
			position:'he',
			check:function(card){
				var player=_status.event.player;
				if(player.hp<3) return 0;
				var type=get.type(card,'trick');
				if(type=='trick'){
					return 6-ai.get.value(card);
				}
				else if(type=='equip'){
					if(player.hasSha()&&game.hasPlayer(function(current){
						return (player.canUse('sha',current)&&
							ai.get.attitude(player,current)<0&&
							ai.get.effect(current,{name:'sha'},player,player)>0)
					})){
						return 6-ai.get.value(card);
					}
				}
				return 0;
			},
			content:function(){
				player.loseHp();
				switch(get.type(cards[0],'trick')){
					case 'basic':player.addTempSkill('zhanyi_basic','phaseAfter');break;
					case 'equip':player.addTempSkill('zhanyi_equip','phaseAfter');break;
					case 'trick':player.addTempSkill('zhanyi_trick','phaseAfter');player.draw(2);break;
				}
			},
			ai:{
				order:9.1,
				result:{
					player:1
				}
			}
		},
		zhanyi_basic:{
			group:['zhanyi_basic_sha','zhanyi_basic_jiu','zhanyi_basic_tao']
		},
		zhanyi_basic_tao:{
			enable:'chooseToUse',
			filterCard:{type:'basic'},
			viewAs:{name:'tao'},
			viewAsFilter:function(player){
				if(!player.num('h',{type:'basic'})) return false;
			},
			prompt:'将一张基本牌当桃使用',
			check:function(card){
				return 8-ai.get.value(card);
			},
			ai:{
				skillTagFilter:function(player){
					if(!player.num('h',{type:'basic'})) return false;
				},
				save:true,
			}
		},
		zhanyi_basic_sha:{
			enable:'chooseToUse',
			filterCard:{type:'basic'},
			viewAs:{name:'sha'},
			viewAsFilter:function(player){
				if(!player.num('h',{type:'basic'})) return false;
			},
			prompt:'将一张基本牌当杀使用',
			check:function(card){return 4-ai.get.value(card)},
			ai:{
				skillTagFilter:function(player){
					if(!player.num('h',{type:'basic'})) return false;
				},
				respondSha:true,
			}
		},
		zhanyi_basic_jiu:{
			enable:'chooseToUse',
			filterCard:{type:'basic'},
			viewAs:{name:'jiu'},
			viewAsFilter:function(player){
				if(!player.num('h',{type:'basic'})) return false;
			},
			prompt:'将一张基本牌当酒使用',
			check:function(card){
				if(_status.event.type=='dying') return 1;
				return 4-ai.get.value(card);
			},
			ai:{
				skillTagFilter:function(player){
					return player.num('h',{type:'basic'})>0&&player.hp<=0;
				},
				save:true,
			}
		},
		zhanyi_equip:{
			trigger:{player:'shaBegin'},
			forced:true,
			filter:function(event,player){
				return event.target.num('he')>0;
			},
			check:function(event,player){
				return ai.get.attitude(player,event.target)<0;
			},
			content:function(){
				trigger.target.chooseToDiscard('he',true,2);
			}
		},
		zhanyi_trick:{
			mod:{
				targetInRange:function(){
					return true;
				}
			}
		},
		shichou:{
			skillAnimation:true,
			unique:true,
			enable:'phaseUse',
			zhuSkill:true,
			filter:function(event,player){
				if(!player.hasZhuSkill('shichou'))return false;
				if(player.num('he')<2) return false;
				return !player.storage.shichou;
			},
			selectCard:2,
			init:function(player){
				if(player.hasZhuSkill('shichou')){
					player.markSkill('shichou');
					player.storage.shichou=false;
				}
			},
			filterTarget:function(card,player,target){
				return target.group=='shu'&&target!=player;
			},
			filterCard:true,
			position:'he',
			check:function(card){
				return 7-ai.get.value(card);
			},
			discard:false,
			prepare:'give',
			content:function(){
				player.storage.shichou=true;
				player.awakenSkill('shichou');
				target.gain(cards,player);
				player.storage.shichou_target=target;
				player.addSkill('shichou2');
				target.markSkillCharacter('shichou',player,'誓仇','代替'+get.translation(player)+'承受伤害直到首次进入濒死状态');
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:7,
				result:{
					player:function(player,target){
						if(player.hasUnknown()) return 0;
						var att=ai.get.attitude(player,target);
						if(att<=0){
							if(target.hp==1) return (10-att)/2;
							return 10-att;
						}
						else{
							if(target.hp==1) return 0;
							return (10-att)/4;
						}
					},
				}
			}
		},
		shichou2:{
			group:'shichou3',
			trigger:{player:'damageBefore'},
			forced:true,
			popup:false,
			content:function(){
				trigger.untrigger();
				trigger.player=player.storage.shichou_target;
				trigger.player.addSkill('shichou4');
				trigger.trigger('damageBefore');
				player.logSkill('shichou2',player.storage.shichou_target);
				game.delay(0.5);
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'damage')){
							if(player.hasSkill('jueqing')) return [1,-2];
							if(ai.get.attitude(player,target)>0) return [0,0];
							var eff=ai.get.damageEffect(target.storage.shichou_target,player,target);
							if(eff>0){
								return [0,1];
							}
							else if(eff<0){
								return [0,-2];
							}
							else{
								return [0,0];
							}
						}
					}
				}
			}
		},
		shichou3:{
			trigger:{global:['dying','dieBegin']},
			forced:true,
			popup:false,
			priority:10,
			filter:function(event,player){
				return event.player==player.storage.shichou_target;
			},
			content:function(){
				trigger.player.unmarkSkill('shichou');
				delete player.storage.shichou_target;
				player.removeSkill('shichou2');
			}
		},
		shichou4:{
			trigger:{player:['damageAfter','damageCancelled']},
			forced:true,
			popup:false,
			audio:false,
			content:function(){
				if(event.triggername=='damageAfter'&&trigger.num){
					player.draw(trigger.num);
				}
				player.removeSkill('shichou4');
			}
		},
		zhaolie:{
			trigger:{player:'phaseDrawBegin'},
			check:function(event,player){
				return game.hasPlayer(function(current){
					return (current!=player&&
						get.distance(player,current,'attack')<=1&&
						ai.get.attitude(player,current)<=0&&
						ai.get.damageEffect(current,player,player)>0);
				});
			},
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('zhaolie'),function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(ai.get.attitude(player,target)>0) return 0;
					return ai.get.damageEffect(target,player,player);
				});
				'step 1'
				if(result.bool){
					trigger.num--;
					player.storage.zhaolie=result.targets[0];
					player.logSkill('zhaolie',result.targets);
					player.addTempSkill('zhaolie2','phaseDrawAfter');
				}
			}
		},
		zhaolie2:{
			trigger:{player:'phaseDrawEnd'},
			forced:true,
			popup:false,
			content:function(){
				'step 0'
				event.cards=get.cards(3);
				player.showCards(event.cards);
				'step 1'
				event.basic=[];
				event.nonbasic=[];
				for(var i=0;i<event.cards.length;i++){
					if(get.type(event.cards[i])=='basic'){
						if(event.cards[i].name=='tao'){
							ui.discardPile.appendChild(event.cards[i]);
						}
						else{
							event.basic.push(event.cards[i]);
						}
					}
					else{
						ui.discardPile.appendChild(event.cards[i]);
						event.nonbasic.push(event.cards[i]);
					}
				}
				var num=event.nonbasic.length;
				if(num==0){
					if(event.basic.length==0){
						event.finish();
						return;
					}
					player.storage.zhaolie.chooseTarget(function(card,player,target){
						var source=_status.event.source;
						return target==source||target==source.storage.zhaolie;
					},true,'选择一个目标获得'+get.translation(event.basic)).set('ai',function(target){
						return ai.get.attitude(_status.event.player,target);
					}).set('source',player);
				}
				else{
					player.storage.zhaolie.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+
					'张牌，或受到'+get.cnNumber(num)+'点伤害').set('ai',function(card){
						var player=_status.event.player;
						switch(_status.event.num){
							case 1:return player.hp>1?0:7-ai.get.value(card);
							case 2:return 8-ai.get.value(card);
							case 3:return 10-ai.get.value(card);
							default:return 0;
						}
					}).set('num',num);
				}
				'step 2'
				var num=event.nonbasic.length;
				var undone=false;
				if(num==0){
					if(event.basic.length){
						result.targets[0].gain(event.basic,'gain2','log');
					}
				}
				else{
					if(result.bool){
						if(event.basic.length){
							player.gain(event.basic,'gain2','log');
						}
					}
					else{
						player.storage.zhaolie.damage(num);
						if(event.basic.length){
							undone=true;
						}
					}
				}
				if(!undone){
					delete player.storage.zhaolie;
					event.finish();
				}
				'step 3'
				if(player.storage.zhaolie.isAlive()){
					player.storage.zhaolie.gain(event.basic,'gain2','log');
				}
				else{
					for(var i=0;i<event.basic.length;i++){
						ui.discardPile.appendChild(event.basic[i]);
					}
				}
				delete player.storage.zhaolie;
			}
		},
		yingjian:{
			trigger:{player:'phaseBegin'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('yingjian'),function(card,player,target){
					return lib.filter.targetEnabled({name:'sha'},player,target);
				}).set('ai',function(target){
					return ai.get.effect(target,{name:'sha'},_status.event.player);
				});
				"step 1"
				if(result.bool){
					player.logSkill('yingjian');
					player.useCard({name:'sha'},result.targets,false);
				}
			},
			ai:{
				threaten:function(player,target){
					return 1.6;
				}
			}
		},
		dingpan:{
			enable:'phaseUse',
			filter:function(event,player){
				var num;
				if(get.mode()=='identity'){
					num=get.population('fan');
				}
				else{
					num=1;
				}
				if(player.getStat().skill.dingpan>=num) return false;
				return true;
			},
			filterTarget:function(card,player,target){
				return target.num('e')>0;
			},
			content:function(){
				'step 0'
				target.draw();
				'step 1'
				var goon=ai.get.damageEffect(target,player,target)>=0;
				if(!goon&&target.hp>=4&&ai.get.attitude(player,target)<0){
					var es=target.get('e');
					for(var i=0;i<es.length;i++){
						if(ai.get.equipValue(es[i],target)>=8){
							goon=true;break;
						}
					}
				}
				target.chooseControl(function(){
					if(_status.event.goon) return '选项二';
					return '选项一';
				}).set('goon',goon).set('prompt','定叛').set('choiceList',['令'+get.translation(player)+'弃置你装备区里的一张牌','获得你装备区内的所有牌并受到一点伤害']);
				'step 2'
				if(result.control=='选项一'){
					player.discardPlayerCard(target,true,'e');
					event.finish();
				}
				else{
					target.gain(target.get('e'),'gain2');
				}
				'step 3'
				game.delay(0.5);
				target.damage();
			},
			ai:{
				order:7,
				result:{
					target:function(player,target){
						if(ai.get.damageEffect(target,player,target)>=0) return 2;
						var att=ai.get.attitude(player,target);
						if(att==0) return 0;
						var es=target.get('e');
						for(var i=0;i<es.length;i++){
							var val=ai.get.equipValue(es[i],target);
							if(val<=4){
								if(att>0){
									return 1;
								}
							}
							else if(val>=7){
								if(att<0){
									return -1;
								}
							}
						}
						return 0;
					}
				}
			}
		},
		hongde:{
			trigger:{player:['gainEnd','loseEnd']},
			direct:true,
			filter:function(event,player){
				return event.cards&&event.cards.length>1;
			},
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('hongde'),function(card,player,target){
					return target!=player;
				}).set('ai',function(target){
					return ai.get.attitude(player,target);
				});
				'step 1'
				if(result.bool){
					player.logSkill('hongde',result.targets);
					result.targets[0].draw();
				}
			}
		},
		ziyuan:{
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				var num=0;
				for(var i=0;i<ui.selected.cards.length;i++){
					num+=get.number(ui.selected.cards[i]);
				}
				return get.number(card)+num<=13;
			},
			complexCard:true,
			selectCard:function(){
				var num=0;
				for(var i=0;i<ui.selected.cards.length;i++){
					num+=get.number(ui.selected.cards[i]);
				}
				if(num==13) return ui.selected.cards.length;
				return ui.selected.cards.length+2;
			},
			discard:false,
			prepare:'give',
			filterTarget:function(card,player,target){
				return player!=target;
			},
			check:function(card){
				var num=0;
				for(var i=0;i<ui.selected.cards.length;i++){
					num+=get.number(ui.selected.cards[i]);
				}
				if(num+get.number(card)==13) return 9-ai.get.value(card);
				if(ui.selected.cards.length==0){
					var cards=_status.event.player.get('h');
					for(var i=0;i<cards.length;i++){
						for(var j=i+1;j<cards.length;j++){
							if(cards[i].number+cards[j].number==13){
								if(cards[i]==card||cards[j]==card) return 8.5-ai.get.value(card);
							}
						}
					}
				}
				return 0;
			},
			content:function(){
				target.gain(cards,player);
				target.recover();
			},
			ai:{
				order:function(skill,player){
					if(game.hasPlayer(function(current){
						return (current.hp<current.maxHp&&current!=player&&
							ai.get.recoverEffect(current,player,player)>0);
					})){
						return 10;
					}
					return 1;
				},
				result:{
					player:function(player,target){
						var eff=ai.get.recoverEffect(target,player,player);
						if(eff<0) return 0;
						if(eff>0){
							if(target.hp==1) return 3;
							return 2;
						}
						if(player.needsToDiscard()) return 1;
						return 0;
					}
				},
				threaten:1.3
			}
		},
		jugu:{
			mod:{
				maxHandcard:function(player,num){
					return num+player.maxHp;
				}
			},
			trigger:{global:'gameStart'},
			forced:true,
			content:function(){
				player.draw(player.maxHp,false);
				player.$draw(player.maxHp);
			}
		},
		tuifeng:{
			trigger:{player:'damageEnd'},
			direct:true,
			filter:function(event,player){
				return player.num('h')>0;
			},
			init:function(player){
				player.storage.tuifeng=[];
			},
			content:function(){
				'step 0'
				player.chooseCard(get.prompt('tuifeng'),'he',[1,trigger.num]).set('ai',function(card){
					if(card.name=='du') return 20;
					return 7-ai.get.useful(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('tuifeng');
					player.lose(result.cards,ui.special);
					player.$give(result.cards,player);
					for(var i=0;i<result.cards.length;i++){
						player.storage.tuifeng.push(result.cards[i]);
					}
					player.markSkill('tuifeng');
				}
			},
			marktext:'锋',
			intro:{
				content:'cards'
			},
			group:'tuifeng2',
			ai:{
				threaten:0.8
			}
		},
		tuifeng2:{
			trigger:{player:'phaseBegin'},
			forced:true,
			filter:function(event,player){
				return player.storage.tuifeng.length>0;
			},
			content:function(){
				player.draw(2*player.storage.tuifeng.length);
				player.addTempSkill('tuifeng3','phaseAfter');
				player.$throw(player.storage.tuifeng.slice(0),1000);
				player.storage.tuifeng3=player.storage.tuifeng.length;
				while(player.storage.tuifeng.length){
					ui.discardPile.appendChild(player.storage.tuifeng.shift());
				}
				player.unmarkSkill('tuifeng')
			}
		},
		tuifeng3:{
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha'&&player.storage.tuifeng3) return num+player.storage.tuifeng3;
				}
			},
			onremove:true
		},
		weidi:{
			trigger:{global:['gameStart','zhuUpdate']},
			forced:true,
			popup:false,
			filter:function(event,player){
				var mode=get.mode();
				return (mode=='identity'||(mode=='versus'&&_status.mode=='four'));
			},
			content:function(){
				var list=[];
				var zhu=get.zhu(player);
				if(zhu&&zhu!=player&&zhu.skills){
					for(var i=0;i<zhu.skills.length;i++){
						if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
							list.push(zhu.skills[i]);
						}
					}
				}
				player.addAdditionalSkill('weidi',list);
				player.storage.zhuSkill_weidi=list;
			}
		},
		zhenlue:{
			mod:{
				targetEnabled:function(card,player,target){
					if(get.type(card)=='delay'&&player!=target){
						return false;
					}
				}
			},
			ai:{
				playernowuxie:true
			}
		},
		jianshu:{
			unique:true,
			enable:'phaseUse',
			animationColor:'thunder',
			skillAnimation:'epic',
			filter:function(event,player){
				return !player.storage.jianshu&&player.num('h',{color:'black'})>0;
			},
			init:function(player){
				player.storage.jianshu=false;
			},
			filterTarget:function(card,player,target){
				if(ui.selected.targets.length){
					return target.num('h')>0&&target.distanceTo(ui.selected.targets[0])<=1;
				}
				return true;
			},
			filterCard:{color:'black'},
			mark:true,
			discard:false,
			delay:0,
			check:function(card){return 6-ai.get.value(card);},
			selectTarget:2,
			multitarget:true,
			content:function(){
				'step 0'
				player.$give(cards,targets[0]);
				player.awakenSkill('jianshu');
				player.storage.jianshu=true;
				targets[0].gain(cards,player);
				'step 1'
				targets[0].chooseToCompare(targets[1]);
				'step 2'
				if(result.bool){
					targets[0].chooseToDiscard('he',2,true);
					targets[1].loseHp();
				}
				else{
					targets[1].chooseToDiscard('he',2,true);
					targets[0].loseHp();
				}
			},
			intro:{
				content:'limited'
			},
			ai:{
				expose:0.4,
				order:4,
				result:{
					target:function(player,target){
						if(player.hasUnknown()) return 0;
						if(ui.selected.targets.length) return -1;
						return -0.5;
					}
				}
			}
		},
		yongdi:{
			unique:true,
			trigger:{player:'damageEnd'},
			animationColor:'fire',
			skillAnimation:'legend',
			filter:function(event,player){
				return !player.storage.yongdi;
			},
			init:function(player){
				player.storage.yongdi=false;
			},
			mark:true,
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('yongdi'),function(card,player,target){
					return target.sex=='male'&&target!=player;
				}).set('ai',function(target){
					if(!_status.event.goon) return 0;
					var player=_status.event.player;
					var att=ai.get.attitude(player,target);
					if(att<=1) return 0;
					var mode=get.mode();
					if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
						if(target.name&&lib.character[target.name]){
							for(var i=0;i<lib.character[target.name][3].length;i++){
								if(lib.skill[lib.character[target.name][3][i]].zhuSkill){
									return att*2;
								}
							}
						}
					}
					return att;
				}).set('goon',!player.hasUnknown());
				'step 1'
				if(result.bool){
					player.awakenSkill('yongdi');
					player.storage.yongdi=true;
					player.logSkill('yongdi',result.targets);
					var target=result.targets[0];
					target.gainMaxHp(true);
					var mode=get.mode();
					if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
						if(target.name&&lib.character[target.name]){
							var skills=lib.character[target.name][3];
							target.storage.zhuSkill_yongdi=[];
							for(var i=0;i<skills.length;i++){
								var info=lib.skill[skills[i]];
								if(info.zhuSkill){
									target.storage.zhuSkill_yongdi.push(skills[i]);
									if(info.init){
										info.init(target);
									}
									if(info.init2){
										info.init2(target);
									}
								}
							}
						}
					}
				}
			},
			ai:{
				expose:0.2
			}
		},
		gushe:{
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return target!=player&&target.num('h')>0;
			},
			selectTarget:[1,3],
			filter:function(event,player){
				return player.num('h')>0;
			},
			multitarget:true,
			multiline:true,
			content:function(){
				player.chooseToCompare(targets).callback=lib.skill.gushe.callback;
			},
			init:function(player){
				player.storage.gushe=0;
			},
			intro:{
				name:'饶舌',
				content:'mark'
			},
			chat:['粗鄙之语','天地不容','谄谀之臣','皓首匹夫，苍髯老贼','二臣贼子','断脊之犬','我从未见过有如此厚顔无耻之人！'],
			callback:function(){
				'step 0'
				event.num1=event.card1.number;
				event.num2=event.card2.number;
				if(player.hasSkill('jici')&&event.num1<=player.storage.gushe){
					player.chooseBool(get.prompt('jici'));
				}
				else{
					event.goto(2);
				}
				'step 1'
				if(result.bool){
					if(event.num1<player.storage.gushe){
						event.num1+=player.storage.gushe;
					}
					else{
						player.getStat().skill.gushe--;
					}
				}
				'step 2'
				if(event.num1>event.num2){
					target.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
						if(_status.event.goon) return 6-ai.get.value(card);
						return 0;
					}).set('goon',ai.get.attitude(target,player)<0);
				}
				else{
					target.chat(lib.skill.gushe.chat[player.storage.gushe]);
					game.delay();
					player.storage.gushe++;
					player.markSkill('gushe');
					if(player.storage.gushe>=7){
						player.die();
					}
					else{
						// player.chooseToDiscard('弃置一张牌，或摸一张牌').set('ai',function(){return -1;});
						event.finish();
					}
				}
				'step 3'
				if(!result.bool){
					player.draw();
				}
			},
			ai:{
				order:7,
				result:{
					target:function(player,target){
						var num=game.countPlayer(function(current){
							return ai.get.attitude(player,current)<0&&current!=player&&current.num('h');
						});
						if(num>3) num=3;
						var hs=player.get('h');
						for(var i=0;i<hs.length;i++){
							if(ai.get.value(hs[i])<=6){
								switch(hs[i].number){
									case 13:return -1;
									case 12:if(player.storage.gushe+num<=8) return -1;break;
									case 11:if(player.storage.gushe+num<=7) return -1;break;
									default:if(hs[i].number>5&&player.storage.gushe+num<=6) return -1;
								}
							}
						}
						return 0;
					},
				}
			}
		},
		jici:{},
		juesi:{
			enable:'phaseUse',
			filter:function(event,player){
				return player.num('h','sha')>0;
			},
			filterTarget:function(card,player,target){
				return target!=player&&target.num('he')>0;
			},
			filterCard:{name:'sha'},
			content:function(){
				'step 0'
				target.chooseToDiscard('he',true);
				'step 1'
				if(target.hp>=player.hp&&result.bool&&result.cards[0].name!='sha'){
					player.useCard({name:'juedou'},target);
				}
			},
			ai:{
				order:2,
				result:{
					target:function(player,target){
						if(ai.get.effect(target,{name:'juedou'},player,player)<=0){
							return 0;
						}
						if(target.hp<player.hp){
							if(player.num('h')>player.hp) return -0.1;
							return 0;
						}
						var hs1=target.get('h','sha');
						var hs2=player.get('h','sha');
						if(hs1.length>hs2.length){
							return 0;
						}
						var hsx=target.get('h');
						if(hsx.length>2&&hs2.length<=1&&hsx[0].number<6){
							return 0;
						}
						if(hsx.length>3&&hs2.length<=1){
							return 0;
						}
						if(hs1.length>hs2.length-1&&hs1.length>0&&(hs2.length<=1||hs1[0].number>hs2[0].number)){
							return 0;
						}
						return -1;
					}
				}
			}
		},
		shefu:{
			trigger:{player:'phaseEnd'},
			direct:true,
			audio:2,
			init:function(player){
				player.storage.shefu=[];
				player.storage.shefu2=[];
			},
			filter:function(event,player){
				return player.num('h')>0;
			},
			intro:{
				content:'cards',
				mark:function(dialog,content,player){
					if(content&&content.length){
						dialog.addAuto(content);
						if(player.isUnderControl(true)){
							var str='';
							for(var i=0;i<player.storage.shefu2.length;i++){
								str+=get.translation(player.storage.shefu2[i]);
								if(i<player.storage.shefu2.length-1){
									str+='、';
								}
							}
							dialog.add('<div class="text center">'+str+'</div>')
						}
					}
				},
			},
			content:function(){
				'step 0'
				var list1=[],list2=[],list3=[];
				for(var i=0;i<lib.inpile.length;i++){
					var type=get.type(lib.inpile[i]);
					if(type=='basic'){
						list1.push(['基本','',lib.inpile[i]]);
					}
					else if(type=='trick'){
						list2.push(['锦囊','',lib.inpile[i]]);
					}
					else if(type=='delay'){
						list3.push(['锦囊','',lib.inpile[i]]);
					}
				}
				player.chooseButton([get.prompt('shefu'),[list1.concat(list2).concat(list3),'vcard']]).set('filterButton',function(button){
					var player=_status.event.player;
					if(player.storage.shefu2&&player.storage.shefu2.contains(button.link[2])) return false;
					return true;
				}).set('ai',function(button){
					var rand=_status.event.rand*2;
					switch(button.link[2]){
						case 'sha':return 5+rand[1];
						case 'tao':return 4+rand[2];
						case 'lebu':return 3+rand[3];
						case 'shan':return 4.5+rand[4];
						case 'wuzhong':return 4+rand[5];
						case 'shunshou':return 3+rand[6];
						case 'nanman':return 2+rand[7];
						case 'wanjian':return 2+rand[8];
						default:return rand[9];
					}
				}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),
				Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
				'step 1'
				if(result.bool){
					player.storage.shefu2.push(result.links[0][2]);
					player.logSkill('shefu');
					player.chooseCard('h','选择一张手牌作为“伏兵”',true);
					if(player.isOnline2()){
						player.send(function(storage){
							game.me.storage.shefu2=storage;
						},player.storage.shefu2);
					}
				}
				else{
					event.finish();
				}
				'step 2'
				if(result.bool){
					var card=result.cards[0];
					player.lose(card,ui.special);
					player.storage.shefu.push(card);
					player.syncStorage('shefu');
					player.markSkill('shefu');
					player.$give(card,player);
				}
			},
			group:['shefu2']
		},
		shefu2:{
			trigger:{global:['useCard','respondEnd']},
			priority:15,
			audio:'shefu',
			filter:function(event,player){
				if(_status.currentPhase==player) return false;
				if(event.name=='respond'){
					if(event.getParent(2).name!='sha') return false;
				}
				return player.storage.shefu2&&player.storage.shefu2.contains(event.card.name);
			},
			direct:true,
			content:function(){
				"step 0"
				var effect=0;
				if(trigger.card.name=='wuxie'||trigger.name=='respond'){
					if(ai.get.attitude(player,trigger.player)<-1){
						effect=-1;
					}
				}
				else if(trigger.targets&&trigger.targets.length){
					for(var i=0;i<trigger.targets.length;i++){
						effect+=ai.get.effect(trigger.targets[i],trigger.card,trigger.player,player);
					}
				}
				var str='设伏：是否令'+get.translation(trigger.player);
				if(trigger.targets&&trigger.targets.length){
					str+='对'+get.translation(trigger.targets);
				}
				str+='的'+get.translation(trigger.card)+'失效？'
				var next=player.chooseBool(str,function(){
					var player=_status.event.player;
					var trigger=_status.event.getTrigger();
					if(_status.event.effect<0){
						if(trigger.card.name=='sha'){
							var target=trigger.targets[0];
							if(target==player){
								return !player.num('h','shan');
							}
							else{
								return target.hp==1||(target.num('h')<=2&&target.hp<=2);
							}
						}
						else{
							return true;
						}
					}
					return false;
				});
				next.set('effect',effect);
				"step 1"
				if(result.bool){
					player.logSkill('shefu');
					var index=player.storage.shefu2.indexOf(trigger.card.name);
					if(index!=-1){
						var card=player.storage.shefu[index];
						ui.discardPile.appendChild(card);
						player.$throw(card);
						player.storage.shefu.splice(index,1);
						player.storage.shefu2.splice(index,1);
						if(player.storage.shefu.length==0){
							player.unmarkSkill('shefu');
						}
						else{
							player.syncStorage('shefu');
							player.markSkill('shefu');
							if(player.isOnline2()){
								player.send(function(storage){
									game.me.storage.shefu2=storage;
								},player.storage.shefu2);
							}
						}
					}
					game.delay(2);
					if(trigger.name=='respond'){
						if(trigger.parent.result){
							trigger.parent.result.bool=false;
						}
					}
					else{
						trigger.untrigger();
						trigger.finish();
					}
				}
				else{
					event.finish();
				}
				"step 2"
				game.broadcastAll(ui.clear);
			},
			ai:{
				threaten:1.8,
				expose:0.3
			}
		},
		benyu:{
			audio:2,
			trigger:{player:'damageEnd'},
			filter:function(event,player){
				if(!event.source) return false;
				var nh1=player.num('h');
				var nh2=event.source.num('h');
				if(nh1==nh2) return false;
				if(nh2<nh2&&nh1>=5) return false;
				if(nh2>nh2&&event.source.isDead()) return false;
				return true;
			},
			direct:true,
			content:function(){
				"step 0"
				var num1=player.num('h');
				var num2=trigger.source.num('h');
				if(num1>num2){
					var next=player.chooseToDiscard([num2+1,num1],'贲育：是否弃置至少'+(num2+1)+'张手牌,并对'+get.translation(trigger.source)+'造成一点伤害？');
					next.logSkill=['benyu',trigger.source];
					next.set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						if(ui.selected.cards.length>=_status.event.num){
							return -1;
						}
						if(ai.get.damageEffect(trigger.source,player,player)>0&&_status.event.num<=2){
							return 8-ai.get.value(card);
						}
						return -1;
					});
					next.set('num',num2+1);
				}
				else{
					event.draw=true;
					event.num=Math.min(num2,5)-num1;
					player.chooseBool(get.prompt('benyu'));
				}
				"step 1"
				if(result.bool){
					if(event.draw){
						player.logSkill('benyu',trigger.source);
						player.draw(event.num);
					}
					else{
						trigger.source.damage(player);
					}
				}
			},
		},
		jili:{
			trigger:{global:'useCard'},
			forced:true,
			check:function(event,player){
				return ai.get.effect(player,event.card,event.player,player)>0;
			},
			filter:function(event,player){
				if(get.color(event.card)!='red') return false;
				if(!event.targets) return false;
				if(event.player==player) return false;
				if(event.targets.contains(player)) return false;
				var type=get.type(event.card);
				if(type!='basic'&&type!='trick') return false;
				if(lib.filter.targetEnabled2(event.card,event.player,player)){
					for(var i=0;i<event.targets.length;i++){
						if(get.distance(event.targets[i],player)<=1) return true;
					}
				}
				return false;
			},
			content:function(){
				'step 0'
				game.delay(0.5);
				'step 1'
				trigger.targets.add(player);
				trigger.player.line(player,'green');
			}
		},
		zhidao:{
			trigger:{source:'damageEnd'},
			filter:function(event,player){
				return _status.currentPhase==player&&event.player.isAlive()&&
				event.player.num('hej')>0&&event.player!=player&&!player.hasSkill('zhidao2');
			},
			forced:true,
			content:function(){
				var num=0;
				if(trigger.player.num('h')) num++;
				if(trigger.player.num('e')) num++;
				if(trigger.player.num('j')) num++;
				if(num){
					player.gainPlayerCard(trigger.player,num,'hej',true).set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
						}
						return true;
					});
				}
				player.addTempSkill('zhidao2','phaseAfter');
			}
		},
		zhidao2:{
			mod:{
				playerEnabled:function(card,player,target){
					if(player!=target) return false;
				}
			}
		},
		luanzhan:{
			mod:{
				selectTarget:function(card,player,range){
					if(!player.storage.luanzhan) return;
					if(range[1]==-1) return;
					if(card.name=='sha') range[1]+=player.storage.luanzhan;
					if(get.color(card)=='black'&&get.type(card)=='trick'){
						var info=get.info(card);
						if(info.multitarget) return false;
						range[1]+=player.storage.luanzhan;
					}
				},
			},
			trigger:{source:'damageEnd'},
			forced:true,
			popup:false,
			silent:true,
			mark:true,
			intro:{
				content:function(storage){
					return '可以额外指定'+storage+'个目标';
				}
			},
			init:function(player){
				player.storage.luanzhan=0;
			},
			content:function(){
				if(typeof player.storage.luanzhan=='number'){
					player.storage.luanzhan+=trigger.num;
				}
				else{
					player.storage.luanzhan=trigger.num;
				}
				player.markSkill('luanzhan');
			},
			group:'luanzhan_cancel',
			subSkill:{
				cancel:{
					trigger:{player:'useCard'},
					forced:true,
					filter:function(event,player){
						if(!player.storage.luanzhan) return false;
						var check=false;
						var card=event.card;
						if(card.name=='sha'){
							check=true;
						}
						else if(get.color(card)=='black'&&get.type(card)=='trick'){
							var info=get.info(card);
							if(!info.multitarget){
								check=true;
								if(info.selectTarget==-1){
									check=false;
								}
								else if(Array.isArray(info.selectTarget)&&info.selectTarget[1]==-1){
									check=false;
								}
							}
						}
						if(check&&event.targets&&event.targets.length<player.storage.luanzhan){
							return true;
						}
						return false;
					},
					content:function(){
						player.storage.luanzhan=0;
						player.markSkill('luanzhan');
					}
				}
			}
		},
		zhengnan:{
			trigger:{global:'dieAfter'},
			frequent:true,
			content:function(){
				'step 0'
				player.draw(3);
				var list=[];
				if(!player.hasSkill('wusheng')){
					list.push('wusheng');
				}
				if(!player.hasSkill('dangxian')){
					list.push('dangxian');
				}
				if(!player.hasSkill('zhiman')){
					list.push('zhiman');
				}
				if(list.length){
					player.chooseControl(list).set('prompt','选择获得一项技能');
				}
				'step 1'
				player.addSkill(result.control);
				player.popup(result.control);
				game.log(player,'获得技能','【'+get.translation(result.control)+'】');
			},
			ai:{
				threaten:1.4
			}
		},
		xiefang:{
			mod:{
				globalFrom:function(from,to,distance){
					return distance-game.countPlayer(function(current){
						return current.sex=='female';
					});
				}
			}
		},
		qizhi:{
			trigger:{player:'useCard'},
			direct:true,
			filter:function(event,player){
				if(!event.targets) return false;
				if(_status.currentPhase!=player) return false;
				var type=get.type(event.card,'trick');
				if(type!='basic'&&type!='trick') return false;
				if(event.noai) return false;
				return game.hasPlayer(function(target){
					return !event.targets.contains(target)&&target.num('he')>0;
				});
			},
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('qizhi'),function(card,player,target){
					return !_status.event.getTrigger().targets.contains(target)&&target.num('he')>0;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(target==player) return 2;
					if(ai.get.attitude(player,target)<=0){
						return 1
					}
					return 0.5;
				});
				'step 1'
				if(result.bool){
					player.storage.qizhi++;
					if(!event.isMine()&&!_status.connectMode) game.delay();
					player.logSkill('qizhi',result.targets);
					player.discardPlayerCard(result.targets[0],true,'he');
					event.target=result.targets[0];
				}
				else{
					event.finish();
				}
				'step 2'
				event.target.draw();
			},
			group:'qizhi2'
		},
		qizhi2:{
			trigger:{player:'phaseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				player.storage.qizhi=0;
			}
		},
		jinqu:{
			trigger:{player:'phaseEnd'},
			check:function(event,player){
				return player.storage.qizhi>=player.num('h');
			},
			prompt:function(event,player){
				if(typeof player.storage.qizhi!='number'){
					'进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(0)+'张？';
				}
				return '进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(player.storage.qizhi)+'张？';
			},
			content:function(){
				'step 0'
				player.draw(2);
				'step 1'
				if(typeof player.storage.qizhi!='number'){
					player.storage.qizhi=0;
				}
				var dh=player.num('h')-player.storage.qizhi;
				if(dh>0){
					player.chooseToDiscard(dh,true);
				}
			}
		},
		mouduan:{
			init2:function(player){
				game.broadcastAll(function(player){
					player._mouduan_mark=player.mark('武',{
						content:'拥有技能【激昂】、【谦逊】'
					});
				},player);
				player.addAdditionalSkill('mouduan',['jiang','qianxun']);
			},
			onremove:function(player){
				game.broadcastAll(function(player){
					if(player._mouduan_mark){
						player._mouduan_mark.delete();
						delete player._mouduan_mark;
					}
				},player);
				player.removeAdditionalSkill('mouduan');
			},
			trigger:{player:'loseEnd'},
			forced:true,
			filter:function(event,player){
				return player._mouduan_mark&&player._mouduan_mark.name=='武'&&player.num('h')<=2;
			},
			content:function(){
				game.broadcastAll(function(player){
					if(!player._mouduan_mark) return;
					player._mouduan_mark.name='文';
					player._mouduan_mark.skill='文';
					player._mouduan_mark.firstChild.innerHTML='文';
					player._mouduan_mark.info.content='拥有技能【英姿】、【克己】';
				},player);
				player.addAdditionalSkill('mouduan',['yingzi','keji']);
			},
			group:'mouduan2'
		},
		mouduan2:{
			trigger:{global:'phaseBegin'},
			priority:5,
			filter:function(event,player){
				return player._mouduan_mark&&player._mouduan_mark.name=='文'&&player.num('h')>2;
			},
			direct:true,
			content:function(){
				'step 0'
				player.chooseToDiscard('he','谋断：是否弃置一张牌将标记变为“武”？').ai=function(){
					return -1;
				}
				'step 1'
				if(result.bool&&player.num('h')>2){
					game.broadcastAll(function(player){
						if(!player._mouduan_mark) return;
						player._mouduan_mark.name='武';
						player._mouduan_mark.skill='武';
						player._mouduan_mark.firstChild.innerHTML='武';
						player._mouduan_mark.info.content='拥有技能【激昂】、【谦逊】';
					},player);
					player.addAdditionalSkill('mouduan',['jiang','qianxun']);
				}
			}
		},
		tanhu:{
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.num('h');
			},
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				'step 0'
				player.chooseToCompare(target);
				'step 1'
				if(result.bool){
					target.addTempSkill('tanhu2','phaseAfter');
				}
			},
			ai:{
				result:{
					target:function(player,target){
						var hs=player.get('h');
						if(hs.length<3) return 0;
						var bool=false;
						for(var i=0;i<hs.length;i++){
							if(hs[i].number>=9&&ai.get.value(hs[i])<7){
								bool=true;
								break;
							}
						}
						if(!bool) return 0;
						return -1;
					}
				},
				order:9,
			},
			group:'tanhu3'
		},
		tanhu2:{
			mark:true,
			intro:{
				content:'已成为探虎目标'
			}
		},
		tanhu3:{
			mod:{
				globalFrom:function(from,to){
					if(to.hasSkill('tanhu2')) return -Infinity;
				}
			},
			trigger:{player:'useCardToBegin'},
			frequent:true,
			filter:function(event){
				return get.type(event.card)=='trick'&&event.target&&event.target.hasSkill('tanhu2');
			},
			content:function(){
				player.draw();
			}
		},
		jiqiao:{
			trigger:{player:'phaseUseBegin'},
			direct:true,
			filter:function(event,player){
				return player.num('he',{type:'equip'})>0;
			},
			content:function(){
				'step 0'
				player.chooseToDiscard(get.prompt('jiqiao'),[1,player.num('he',{type:'equip'})],'he',function(card){
					return get.type(card)=='equip';
				}).set('ai',function(card){
					if(card.name=='bagua') return 10;
					return 7-ai.get.value(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('jiqiao');
					event.cards=get.cards(3*result.cards.length);
					player.showCards(event.cards);
				}
				else{
					event.finish();
				}
				'step 2'
				var gained=[];
				for(var i=0;i<event.cards.length;i++){
					if(get.type(event.cards[i],'trick')=='trick'){
						gained.push(event.cards[i]);
					}
					else{
						ui.discardPile.appendChild(event.cards[i]);
					}
				}
				player.gain(gained,'gain2');
			},
			ai:{
				threaten:1.5
			}
		},
		linglong:{
			inherit:'bagua_skill',
			filter:function(event,player){
				if(!event.filterCard({name:'shan'})) return false;
				if(event.parent.player.num('s','unequip')) return false;
				if(player.get('e','2')) return false;
				return true;
			},
			ai:{
				effect:{
					target:function(card,player,target){
						if(player==target&&get.subtype(card)=='equip2'){
							if(ai.get.equipValue(card)<=8) return 0;
						}
						if(target.get('e','2')) return;
						if(player.hasSkill('unequip')) return;
						if(get.tag(card,'respondShan')) return [0.5,0];
					}
				}
			},
			mod:{
				maxHandcard:function(player,num){
					if(player.get('e','3')||player.get('e','4')) return;
					return num+1;
				},
				targetInRange:function(card,player,target,now){
					if(player.get('e','5')) return;
					var type=get.type(card);
					if(type=='trick'||type=='delay') return true;
				}
			}
		},
		fenyong:{
			trigger:{player:'damageEnd'},
			content:function(){
				player.addSkill('fenyong2');
			}
		},
		fenyong2:{
			mark:true,
			intro:{
				content:'防止你受到的所有伤害'
			},
			trigger:{player:'damageBefore'},
			forced:true,
			content:function(){
				trigger.untrigger();
				trigger.finish();
			},
			ai:{
				nofire:true,
				nothunder:true,
				nodamage:true,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'damage')) return [0,0];
					}
				},
			}
		},
		xuehen:{
			trigger:{global:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.hasSkill('fenyong2')&&event.player.isAlive();
			},
			content:function(){
				'step 0'
				player.removeSkill('fenyong2');
				player.chooseControl('弃牌','出杀',function(){
					var player=_status.event.player;
					var trigger=_status.event.getTrigger();
					if(ai.get.attitude(player,trigger.player)<0){
						var he=trigger.player.num('he');
						if(he<2) return '出杀';
						if(player.maxHp-player.hp>=2&&he<=3){
							return '弃牌';
						}
						if(player.maxHp-player.hp>=3&&he<=5){
							return '弃牌';
						}
						if(player.maxHp-player.hp>3){
							return '弃牌';
						}
						return '出杀';
					}
					return '出杀';
				}).set('prompt','弃置'+get.translation(trigger.player)+get.cnNumber(player.maxHp-player.hp)+'张牌，或对任意一名角色使用一张杀');
				'step 1'
				if(result.control=='弃牌'){
					player.line(trigger.player,'green');
					if(player.hp<player.maxHp&&trigger.player.num('he')){
						player.discardPlayerCard(trigger.player,true,'he',player.maxHp-player.hp);
					}
				}
				else{
					player.chooseTarget('选择一个出杀目标',function(card,player,target){
						return lib.filter.targetEnabled({name:'sha'},player,target);
					},true).set('ai',function(target){
						return ai.get.effect(target,{name:'sha'},_status.event.player);
					});
					event.sha=true;
				}
				'step 2'
				if(event.sha&&result.targets&&result.targets.length){
					player.useCard({name:'sha'},result.targets);
				}
			}
		},
		zhenwei:{
			trigger:{global:'useCardToBefore'},
			direct:true,
			priority:5,
			filter:function(event,player){
				if(player==event.target||player==event.player) return false;
				if(!player.num('he')) return false;
				if(event.targets.length>1) return false;
				if(!event.target) return false;
				if(event.target.hp>=player.hp) return false;

				var card=event.card;
				if(card.name=='sha') return true;
				if(get.color(card)=='black'&&get.type(card)=='trick') return true;
				return false;
			},
			content:function(){
				"step 0"
				var save=false;
				if(ai.get.attitude(player,trigger.target)>2){
					if(trigger.card.name=='sha'){
						if(player.num('h','shan')||player.get('e','2')||
						trigger.target.hp==1||player.hp>trigger.target.hp+1){
							if(!trigger.target.num('h','shan')||trigger.target.num('h')<player.num('h')){
								save=true;
							}
						}
					}
					else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
						save=true;
					}
					else if(trigger.card.name=='shunshou'&&
						ai.get.attitude(player,trigger.player)<0&&
						ai.get.attitude(trigger.player,trigger.target)<0){
						save=true;
					}
				}
				var next=player.chooseToDiscard('he',get.prompt('zhenwei'));
				next.logSkill=['zhenwei',trigger.target];
				next.set('ai',function(card){
					if(_status.event.aisave){
						return 7-ai.get.value(card);
					}
					return 0;
				});
				next.set('aisave',save);
				"step 1"
				if(result.bool){
					player.chooseControl('转移','失效',function(){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						if(trigger.card.name=='sha'){
							if(player.num('h','shan')) return '转移';
						}
						else if(trigger.card.name=='juedou'){
							if(player.num('h','sha')) return '转移';
						}
						return '失效';
					}).set('prompt','将'+get.translation(trigger.card)+'转移给你，或令其失效');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.control=='转移'){
					player.draw();
					trigger.target=player;
					trigger.targets.length=0;
					trigger.targets.push(player);
					trigger.untrigger();
					trigger.trigger('useCardToBefore');
					trigger.trigger(trigger.card.name+'Before');
					trigger.player.line(player);
				}
				else{
					if(get.itemtype(trigger.card)=='card'){
						trigger.player.$gain2(trigger.card);
						if(!trigger.player.storage.zhenwei2){
							trigger.player.storage.zhenwei2=[trigger.card];
						}
						else{
							trigger.player.storage.zhenwei2.push(trigger.card);
						}
						ui.special.appendChild(trigger.card);
						trigger.player.markSkill('zhenwei2');
					}
					trigger.untrigger();
					trigger.finish();
					trigger.player.addSkill('zhenwei2');
				}
				game.delay();
			},
			ai:{
				threaten:1.1
			}
		},
		zhenwei2:{
			mark:true,
			intro:{
				content:'cards'
			},
			trigger:{global:'phaseAfter'},
			forced:true,
			content:function(){
				player.gain(player.storage.zhenwei2,'gain2');
				delete player.storage.zhenwei2;
				player.removeSkill('zhenwei2');
			}
		},
		jie:{
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
			},
			forced:true,
			content:function(){
				trigger.num++;
			}
		},
		dahe:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.num('h');
			},
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				'step 0'
				player.chooseToCompare(target).set('preserve','win');
				'step 1'
				if(result.bool&&result.target){
					event.type=true;
					event.card=result.target;
					player.chooseTarget('将'+get.translation(result.target)+'交给一名角色',function(card,player,target){
						return target.hp<=player.hp;
					}).set('ai',function(target){
						var att=ai.get.attitude(_status.event.player,target);
						if(_status.event.du) return -att;
						return att;
					}).set('du',event.card.name=='du');
					target.addTempSkill('dahe2','phaseAfter');
				}
				else{
					event.type=false;
					if(player.num('h')){
						player.showHandcards();
						player.chooseToDiscard('h',true);
					}
				}
				'step 2'
				if(event.type){
					if(result.bool){
						player.line(result.targets,'green');
						result.targets[0].gain(event.card,'gain2');
					}
				}
			},
			ai:{
				result:{
					target:function(player,target){
						var hs=player.get('h');
						if(hs.length<3) return 0;
						var bool=false;
						for(var i=0;i<hs.length;i++){
							if(hs[i].number>=9&&ai.get.value(hs[i])<7){
								bool=true;
								break;
							}
						}
						if(!bool) return 0;
						if(player.canUse('sha',target)&&(player.num('h','sha'))){
							return -2;
						}
						return -0.5;
					}
				},
				order:9,
			}
		},
		dahe2:{
			mark:true,
			intro:{
				content:'非红桃闪无效'
			},
			mod:{
				cardRespondable:function(card,player){
					if(card.name=='shan'&&get.suit(card)!='heart') return false;
				},
			}
		},
		xunzhi:{
			trigger:{player:'phaseBegin'},
			init:function(player){
				player.storage.xunzhi=0;
			},
			filter:function(event,player){
				var previous=player.getPrevious();
				var next=player.getNext();
				if(previous&&next){
					return player.hp!=previous.hp&&player.hp!=next.hp;
				}
				return false;
			},
			check:function(event,player){
				return player.hp>=3&&player.num('h')>player.hp+1+player.storage.xunzhi;
			},
			content:function(){
				player.loseHp();
				player.storage.xunzhi+=2;
			},
			mark:true,
			intro:{
				content:function(storage,player){
					return '手牌上限+'+player.storage.xunzhi;
				}
			},
			mod:{
				maxHandcard:function(player,num){
					if(typeof player.storage.xunzhi=='number'){
						return num+player.storage.xunzhi;
					}
				}
			}
		},
		yawang:{
			trigger:{player:'phaseDrawBefore'},
			forced:true,
			check:function(event,player){
				var num=game.countPlayer(function(target){
					return target.hp==player.hp;
				});
				if(!player.hasSkill('xunzhi2')){
					var nh=player.num('h');
					if(nh>5) return false;
					if(num==3&&nh>3) return false;
				}
				return num>=3;
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				var num=game.countPlayer(function(target){
					return target.hp==player.hp;
				});
				if(num){
					player.draw(num);
				}
				player.storage.yawang=num;
				player.addTempSkill('yawang2','phaseAfter');
			}
		},
		yawang2:{
			mod:{
				cardEnabled:function(card,player){
					if(_status.currentPhase!=player) return;
					if(get.cardCount(true,player)>=player.storage.yawang) return false;
				}
			}
		},
		junwei:{
			trigger:{player:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				return player.storage.yinling&&player.storage.yinling.length>=3;
			},
			content:function(){
				'step 0'
				if(player.storage.yinling.length>3){
					player.chooseButton(3,[get.prompt('junwei'),'hidden',player.storage.yinling]).set('ai',function(button){
						return 1;
					});
				}
				else{
					player.chooseBool().set('createDialog',[get.prompt('junwei'),'hidden',player.storage.yinling]).set('dialogselectx',true);
					event.cards=player.storage.yinling.slice(0);
				}
				'step 1'
				if(result.bool){
					var cards=event.cards||result.links;
					for(var i=0;i<cards.length;i++){
						player.storage.yinling.remove(cards[i]);
						ui.discardPile.appendChild(cards[i]);
					}
					player.$throw(cards);
					player.syncStorage('yinling');
					if(player.storage.yinling.length==0){
						player.unmarkSkill('yinling');
					}
					else{
						player.markSkill('yinling');
					}
					game.delay();
					player.chooseTarget(true,function(card,player,target){
						return player!=target;
					}).set('ai',function(target){
						return -ai.get.attitude(_status.event.player,target)/Math.sqrt(1+target.hp);
					});
				}
				else{
					event.finish();
				}
				'step 2'
				if(result.bool&&result.targets&&result.targets.length){
					var target=result.targets[0];
					player.logSkill('junwei',result.targets);
					event.target=target;
					var nshan=target.num('h','shan');
					if(nshan==0){
						event.directfalse=true;
					}
					else{
						target.chooseCard('交给'+get.translation(player)+'一张闪，或流失一点体力',function(card){
							return card.name=='shan';
						}).set('ai',function(card){
							if(_status.event.nshan>1) return 1;
							if(_status.event.player.hp>=3) return 0;
							return 1;
						}).set('nshan',nshan);
					}
				}
				else{
					event.finish();
				}
				'step 3'
				if(!event.directfalse&&result.bool) game.delay();
				ui.clear();
				'step 4'
				if(!event.directfalse&&result.bool){
					event.cards=result.cards;
					event.target.$throw(result.cards);
					player.chooseTarget('将闪交给一名角色',true,function(card,player,target){
						return target!=_status.event.getParent().target;
					}).set('ai',function(target){
						return ai.get.attitude(_status.event.player,target)/(target.num('h','shan')+1);
					});
				}
				else{
					event.target.loseHp();
					delete event.cards;
				}
				'step 5'
				if(event.cards){
					player.line(result.targets,'green');
					result.targets[0].gain(event.cards,'gain2');
					game.log(player,'将',event.cards,'交给',result.targets[0]);
					event.finish();
				}
				else{
					if(event.target.num('e')){
						player.choosePlayerCard('e','将'+get.translation(event.target)+'的一张装备牌移出游戏',true,event.target);
					}
					else{
						event.finish();
					}
				}
				'step 6'
				if(result.bool){
					var card=result.links[0];
					if(event.target.storage.junwei2){
						event.target.storage.junwei2.push(card);
						event.target.markSkill('junwei2');
					}
					else{
						event.target.storage.junwei2=[card];
					}
					event.target.lose(card,ui.special);
					event.target.addSkill('junwei2');
					event.target.syncStorage('junwei2');
				}
			}
		},
		junwei2:{
			mark:true,
			intro:{
				content:'cards'
			},
			trigger:{player:'phaseEnd'},
			forced:true,
			content:function(){
				'step 0'
				if(player.storage.junwei2.length){
					var card=player.storage.junwei2.shift();
					player.equip(card);
					event.redo();
				}
				'step 1'
				player.removeSkill('junwei2');
				delete player.storage.junwei2;
			}
		},
		yinling:{
			enable:'phaseUse',
			filterCard:{color:'black'},
			position:'he',
			intro:{
				content:'cards',
				onunmark:'throw'
			},
			filter:function(event,player){
				return player.num('he',{color:'black'})>0&&player.storage.yinling.length<4;
			},
			filterTarget:function(card,player,target){
				return target.num('he')>0&&target!=player;
			},
			init:function(player){
				player.storage.yinling=[];
			},
			check:function(card){
				return 6-ai.get.value(card);
			},
			content:function(){
				'step 0'
				player.choosePlayerCard('hej',target,true);
				'step 1'
				target.$give(result.links,player);
				target.lose(result.links,ui.special);
				player.storage.yinling.push(result.links[0]);
				player.markSkill('yinling');
				player.syncStorage('yinling');
			},
			ai:{
				order:10.1,
				expose:0.1,
				result:{
					target:function(player,target){
						if(target.hasSkill('tuntian')) return 0;
						var es=target.get('e');
						var nh=target.num('h');
						var noe=(es.length==0||target.hasSkillTag('noe'));
						var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
						var noh=(nh==0||target.hasSkillTag('noh'));
						if(noh&&noe) return 0;
						if(noh&&noe2) return 0.01;
						if(ai.get.attitude(player,target)<=0) return (target.num('he'))?-1.5:1.5;
						var js=target.get('j');
						if(js.length){
							var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
							if(jj.name=='guohe') return 3;
							if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
								return -1.5;
							}
							return 2;
						}
						return -1.5;
					},
				},
			}
		},
		yanxiao:{
			enable:'phaseUse',
			filterCard:{suit:'diamond'},
			filterTarget:true,
			check:function(card){
				return 7-ai.get.value(card);
			},
			position:'he',
			filter:function(event,player){
				return player.num('he',{suit:'diamond'})>0;
			},
			discard:false,
			prepare:'give',
			content:function(){
				if(target.hasSkill('yanxiao2')&&target.storage.yanxiao2){
					target.storage.yanxiao2.push(cards[0]);
					target.syncStorage('yanxiao2');
					target.markSkill('yanxiao2');
				}
				else{
					target.storage.yanxiao2=cards.slice(0);
					target.syncStorage('yanxiao2');
					target.addSkill('yanxiao2');
				}
			},
			ai:{
				order:8,
				result:{
					target:function(player,target){
						if(target.storage.yanxiao2&&target.storage.yanxiao2.length) return 0;
						if(target.num('j')) return 1;
						return 0;
					}
				}
			}
		},
		yanxiao2:{
			mark:true,
			intro:{
				content:'cards'
			},
			trigger:{player:'phaseJudgeBegin'},
			forced:true,
			content:function(){
				var cards=player.storage.yanxiao2.concat(player.get('j'));
				player.gain(cards,'gain2','log');
				delete player.storage.yanxiao2;
				player.removeSkill('yanxiao2');
			},
			ai:{
				effect:{
					target:function(card){
						if(get.type(card)=='delay') return [0,0.1];
					}
				}
			}
		},
		anxian:{
			group:['anxian_source','anxian_target'],
			subSkill:{
				source:{
					trigger:{source:'damageBefore'},
					filter:function(event,player){
						return event.card&&event.card.name=='sha';
					},
					check:function(event,player){
						if(ai.get.damageEffect(event.player,player,player)<=0) return true;
						return false;
					},
					content:function(){
						'step 0'
						if(trigger.player.num('h')){
							trigger.player.chooseToDiscard(true);
						}
						'step 1'
						player.draw();
						trigger.untrigger();
						trigger.finish();
					}
				},
				target:{
					trigger:{target:'shaBefore'},
					direct:true,
					filter:function(event,player){
						return player.num('h');
					},
					content:function(){
						"step 0"
						var next=player.chooseToDiscard(get.prompt('anxian'));
						next.set('ai',function(card){
							var player=_status.event.player;
							var trigger=_status.event.getTrigger();
							if(ai.get.attitude(player,trigger.player)>0){
								return 9-ai.get.value(card);
							}
							if(player.num('h',{name:'shan'})) return -1;
							return 7-ai.get.value(card);
						});
						next.logSkill='anxian';
						"step 1"
						if(result.bool){
							trigger.player.draw();
							trigger.untrigger();
							trigger.finish();
						}
					},
				}
			}
		},
		luoyan_tianxiang:{
			inherit:'tianxiang',
			filter:function(event,player){
				if(!player.storage.xingwu||!player.storage.xingwu.length) return false;
				if(player.hasSkill('tianxiang')) return false;
				return lib.skill.tianxiang.filter(event,player);
			},
		},
		luoyan_liuli:{
			inherit:'liuli',
			filter:function(event,player){
				if(!player.storage.xingwu||!player.storage.xingwu.length) return false;
				if(player.hasSkill('liuli')) return false;
				return lib.skill.liuli.filter(event,player);
			},
		},
		luoyan:{
			group:['luoyan_tianxiang','luoyan_liuli'],
		},
		xingwu:{
			audio:2,
			group:['xingwu_color','xingwu_color2'],
			subSkill:{
				color:{
					trigger:{player:'phaseBegin'},
					forced:true,
					popup:false,
					silent:true,
					content:function(){
						player.storage.xingwu_color=['black','red'];
					}
				},
				color2:{
					trigger:{player:'useCard'},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player){
						return Array.isArray(player.storage.xingwu_color)&&_status.currentPhase==player;
					},
					content:function(){
						player.storage.xingwu_color.remove(get.color(trigger.card));
					}
				}
			},
			trigger:{player:'phaseDiscardBegin'},
			direct:true,
			filter:function(event,player){
				if(!player.storage.xingwu_color) return false;
				var length=player.storage.xingwu_color.length;
				if(length==0) return false;
				var hs=player.get('h');
				if(hs.length==0) return false;
				if(length==2) return true;
				var color=player.storage.xingwu_color[0];
				for(var i=0;i<hs.length;i++){
					if(get.color(hs[i])==color) return true;
				}
				return false;
			},
			intro:{
				content:'cards'
			},
			init:function(player){
				player.storage.xingwu=[];
			},
			content:function(){
				'step 0'
				player.chooseCard(get.prompt('xingwu'),function(card){
					return _status.event.player.storage.xingwu_color.contains(get.color(card));
				}).set('ai',function(card){
					var player=_status.event.player;
					if(player.storage.xingwu.length==2){
						if(!game.hasPlayer(function(current){
							return (current!=player&&current.sex=='male'&&
								ai.get.damageEffect(current,player,player)>0&&
								ai.get.attitude(player,current)<0)
						})) return 0;
					}
					return 7-ai.get.value(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('xingwu');
					if(player.storage.xingwu.length<2){
						player.$give(result.cards,player);
					}
					player.lose(result.cards,ui.special);
					player.storage.xingwu=player.storage.xingwu.concat(result.cards);
					player.markSkill('xingwu');
					player.syncStorage('xingwu');
				}
				else{
					event.finish();
				}
				'step 2'
				if(player.storage.xingwu.length==3){
					player.$throw(player.storage.xingwu);
					while(player.storage.xingwu.length){
						ui.discardPile.appendChild(player.storage.xingwu.shift());
					}
					player.unmarkSkill('xingwu');
					player.chooseTarget(function(card,player,target){
						return target!=player&&target.sex=='male';
					},'对一名男性角色造成两点伤害并弃置其装备区内的牌').set('ai',function(target){
						var player=_status.event.player;
						if(ai.get.attitude(player,target)>0) return -1;
						return ai.get.damageEffect(target,player,player)+target.num('e')/2;
					});
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool){
					var target=result.targets[0];
					target.damage(2);
					event.target=target;
					player.line(target,'green');
				}
				else{
					event.finish();
				}
				'step 4'
				if(event.target&&event.target.isAlive()){
					var es=event.target.get('e');
					if(es.length){
						event.target.discard(es);
					}
				}
			},
			ai:{
				threaten:1.5
			}
		},
		yinbing:{
			trigger:{player:'phaseEnd'},
			direct:true,
			audio:2,
			init:function(player){
				player.storage.yinbing=[];
			},
			filter:function(event,player){
				return player.num('he',{type:'basic'})<player.num('he');
			},
			marktext:'兵',
			content:function(){
				"step 0"
				player.chooseCard([1,player.num('he')-player.num('he',{type:'basic'})],'he',get.prompt('yinbing'),function(card){
					return get.type(card)!='basic';
				}).set('ai',function(card){
					return 6-ai.get.value(card);
				});
				"step 1"
				if(result.bool){
					player.$give(result.cards,player,false);
					player.logSkill('yinbing');
					game.log(player,'将',result.cards,'置于武将牌上');
					player.storage.yinbing=player.storage.yinbing.concat(result.cards);
					player.lose(result.cards,ui.special);
					player.markSkill('yinbing');
					player.syncStorage('yinbing');
				}
			},
			intro:{
				content:'cards',
				onunmark:function(storage,player){
					if(storage&&storage.length){
						for(var i=0;i<storage.length;i++){
							ui.discardPile.appendChild(storage[i]);
						}
						player.$throw(storage);
						delete player.storage.yinbing;
					}
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(card.name=='sha'||card.name=='juedou'){
							if(current<0) return 1.2;
						}
					}
				},
				threaten:function(player,target){
					if(target.storage.yinbing&&target.storage.yinbing.length) return 2;
					return 1;
				}
			},
			subSkill:{
				discard:{
					trigger:{player:'damageEnd'},
					forced:true,
					filter:function(event,player){
						return event.card&&player.storage.yinbing.length>0&&
						(event.card.name=='sha'||event.card.name=='juedou');
					},
					content:function(){
						'step 0'
						player.chooseCardButton('移去一张引兵牌',true,player.storage.yinbing);
						'step 1'
						var card=result.links[0];
						player.storage.yinbing.remove(card);
						ui.discardPile.appendChild(card);
						player.$throw(card);
						game.log(player,'将',card,'置入弃牌堆');
						player.syncStorage('yinbing');
						if(player.storage.yinbing.length==0){
							player.unmarkSkill('yinbing');
						}
					}
				}
			},
			group:'yinbing_discard'
		},
		juedi:{
			trigger:{player:'phaseBegin'},
			filter:function(event,player){
				return player.storage.yinbing&&player.storage.yinbing.length>0;
			},
			direct:true,
			audio:2,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('juedi'),function(card,player,target){
					return player.hp>=target.hp;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(target==player){
						if(player.num('h')>=player.maxHp) return 0;
						return 0.5;
					}
					var att=ai.get.attitude(player,target);
					if(att<2) return 0;
					if(target.hp==1&&att>2){
						att+=2;
					}
					if(player.num('j','lebu')){
						if(target.hp==target.maxHp) return att-2;
						return att-1;
					}
					if(target.hp==target.maxHp) return 0;
					if(player.num('h')<player.hp-1){
						return att-3;
					}
					return att-2;
				});
				'step 1'
				if(result.bool){
					player.logSkill('juedi',result.targets);
					if(result.targets[0]==player){
						player.$throw(player.storage.yinbing,1000);
						var num=player.maxHp-player.num('h');
						if(num>0) player.draw(num);
						while(player.storage.yinbing.length){
							ui.discardPile.appendChild(player.storage.yinbing.shift());
						}
						player.syncStorage('yinbing');
						player.unmarkSkill('yinbing');
					}
					else{
						var target=result.targets[0];
						target.recover();
						target.gain(player.storage.yinbing.slice(0),'gain2','log');
						target.draw(player.storage.yinbing.length);
						player.storage.yinbing.length=0;
					}
					player.syncStorage('yinbing');
					player.unmarkSkill('yinbing');
				}
			}
		},
		meibu:{
			trigger:{global:'phaseUseBegin'},
			filter:function(event,player){
				return event.player!=player&&get.distance(event.player,player,'attack')>1;
			},
			logTarget:'player',
			check:function(event,player){
				if(ai.get.attitude(player,event.player)>=0) return false;
				var e2=player.get('e','2');
				if(e2){
					if(e2.name=='tengjia') return true;
					if(e2.name=='bagua') return	true;
				}
				return player.num('h','shan')>0;
			},
			content:function(){
				var target=trigger.player;
				target.addTempSkill('meibu_viewas','phaseAfter');
				target.addTempSkill('meibu_range','phaseAfter');
				target.storage.meibu=player;
				target.markSkillCharacter('meibu',player,'魅步','锦囊牌均视为杀且'+get.translation(player)+'视为在攻击范围内');
			},
			ai:{
				expose:0.2
			},
			subSkill:{
				range:{
					mod:{
						targetInRange:function(card,player,target){
							if(card.name=='sha'&&target==player.storage.meibu){
								return true;
							}
						}
					},
					onremove:function(player){
						game.broadcast(function(player){
							if(player.marks.meibu){
								player.marks.meibu.delete();
								delete player.marks.meibu;
							}
						},player);
						if(player.marks.meibu){
							player.marks.meibu.delete();
							delete player.marks.meibu;
							game.addVideo('unmark',player,'meibu');
						}
					},
					trigger:{player:'useCard'},
					forced:true,
					popup:false,
					filter:function(event,player){
						return event.skill=='meibu_viewas'
					},
					content:function(){
						player.removeSkill('meibu_viewas');
						game.broadcastAll(function(player){
							if(player.marks.meibu&&player.marks.meibu.info){
								player.marks.meibu.info.content=player.marks.meibu.info.content.slice(8);
							}
						},player);
					}
				},
				viewas:{
					mod:{
						cardEnabled:function(card,player){
							if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
						},
						cardUsable:function(card,player){
							if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
						},
						cardRespondable:function(card,player){
							if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
						},
						cardSavable:function(card,player){
							if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
						},
					},
					enable:['chooseToUse','chooseToRespond'],
					filterCard:function(card){
						return get.type(card,'trick')=='trick';
					},
					viewAs:{name:'sha'},
					check:function(){return 1},
					ai:{
						effect:{
							target:function(card,player,target,current){
								if(get.tag(card,'respondSha')&&current<0) return 0.8
							}
						},
						respondSha:true,
						order:4,
						useful:-1,
						value:-1
					}
				}
			}
		},
		mumu:{
			enable:'phaseUse',
			usable:1,
			filterCard:function(card,player,target){
				return card.name=='sha'||(get.type(card,'trick')=='trick'&&get.color(card)=='black');
			},
			check:function(card){
				return 7-ai.get.value(card);
			},
			filterTarget:function(card,player,target){
				if(target==player) return false;
				return target.get('e','1')||target.get('e','2');
			},
			content:function(){
				'step 0'
				var e1=target.get('e','1');
				var e2=target.get('e','2');
				event.e1=e1;
				event.e2=e2;
				if(e1&&e2){
					player.chooseControl('武器牌','防具牌').set('ai',function(){
						if(_status.event.player.get('e','2')){
							return '武器牌';
						}
						return '防具牌';
					});
				}
				else if(e1){
					event.choice='武器牌';
				}
				else{
					event.choice='防具牌';
				}
				'step 1'
				var choice=event.choice||result.control;
				if(choice=='武器牌'){
					if(event.e1){
						target.discard(event.e1);
					}
					player.draw();
				}
				else{
					if(event.e2){
						player.equip(event.e2);
						target.$give(event.e2,player);
					}
				}
			},
			ai:{
				order:8,
				result:{
					target:function(player,target){
						if(target.get('e','2')&&!player.get('e','2')){
							return -2;
						}
						return -1;
					}
				}
			}
		},
		fentian:{
			audio:2,
			trigger:{player:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				if(player.num('h')>=player.hp) return false;
				return game.hasPlayer(function(current){
					return player!=current&&get.distance(player,current,'attack')<=1&&current.num('he');
				});
			},
			intro:{
				content:'cards',
			},
			init:function(player){
				player.storage.fentian=[];
			},
			content:function(){
				'step 0'
				player.chooseTarget('焚天：选择一名攻击范围内的角色，将其一张牌置于你的武将牌上',true,function(card,player,target){
					return player!=target&&get.distance(player,target,'attack')<=1&&target.num('he')>0;
				}).set('ai',function(target){
					return -ai.get.attitude(_status.event.player,target)
				});
				'step 1'
				if(result.bool){
					player.logSkill('fentian',result.targets);
					event.target=result.targets[0];
					player.choosePlayerCard(result.targets[0],'he',true);
				}
				else{
					event.finish();
				}
				'step 2'
				if(result.bool){
					event.target.$give(result.links,player);
					event.target.lose(result.links,ui.special);
					player.storage.fentian=player.storage.fentian.concat(result.links);
					player.syncStorage('fentian');
					setTimeout(function(){
						player.markSkill('fentian');
					},700);
				}
			},
			mod:{
				attackFrom:function(from,to,distance){
					return distance-from.storage.fentian.length;
				}
			}
		},
		zhiri:{
			trigger:{player:'phaseBegin'},
			forced:true,
			unique:true,
			audio:2,
			skillAnimation:true,
			animationColor:'fire',
			filter:function(event,player){
				return player.storage.fentian&&player.storage.fentian.length>=3&&!player.storage.zhiri;
			},
			content:function(){
				player.loseMaxHp();
				player.addSkill('xintan');
				player.storage.zhiri=true;
				player.awakenSkill('zhiri');
			}
		},
		xintan:{
			enable:'phaseUse',
			usable:1,
			audio:2,
			unique:true,
			filter:function(event,player){
				return player.storage.fentian&&player.storage.fentian.length>=2;
			},
			filterTarget:true,
			prompt:'移去两张“焚”并令一名角色失去一点体力',
			content:function(){
				'step 0'
				player.chooseCardButton(2,'移去两张“焚”并令'+get.translation(target)+'失去一点体力',player.storage.fentian,true);
				'step 1'
				if(result.bool){
					player.$throw(result.links);
					for(var i=0;i<result.links.length;i++){
						player.storage.fentian.remove(result.links[i]);
						ui.discardPile.appendChild(result.links[i]);
					}
					player.syncStorage('fentian');
					target.loseHp();
				}
			},
			ai:{
				order:8,
				result:{
					target:-1
				}
			}
		},
		danji:{
			skillAnimation:true,
			trigger:{player:'phaseBegin'},
			forced:true,
			filter:function(event,player){
				return !player.storage.danji&&player.num('h')>player.hp;
			},
			content:function(){
				player.storage.danji=true;
				player.loseMaxHp();
				player.addSkill('mashu');
				player.addSkill('nuzhan');
				player.awakenSkill('danji');
			}
		},
		nuzhan:{
			trigger:{player:'useCard'},
			filter:function(event,player){
				return event.card&&event.card.name=='sha'&&event.cards&&
					event.cards.length==1&&get.type(event.cards[0],'trick')=='trick';
			},
			forced:true,
			content:function(){
				if(player.stat[player.stat.length-1].card.sha>0){
					player.stat[player.stat.length-1].card.sha--;
				}
			},
			group:'nuzhan2'
		},
		nuzhan2:{
			trigger:{source:'damageBegin'},
			forced:true,
			filter:function(event,player){
				return event.card&&event.card.name=='sha'&&event.cards&&
					event.cards.length==1&&get.type(event.cards[0])=='equip';
			},
			content:function(){
				trigger.num++;
			}
		},
		tunchu:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			check:function(event,player){
				return player.num('h')-player.num('h',{type:'equip'})+2<=player.hp;
			},
			content:function(){
				trigger.num+=2;
				player.addTempSkill('tunchu_choose','phaseDrawAfter');
			},
			init:function(player){
				player.storage.tunchu=[];
			},
			intro:{
				content:'cards'
			},
			group:'tunchu_disable',
			subSkill:{
				choose:{
					trigger:{player:'phaseDrawEnd'},
					forced:true,
					popup:false,
					content:function(){
						'step 0'
						player.removeSkill('tunchu_choose');
						if(player.num('h')){
							player.chooseCard('h',true);
						}
						else{
							event.finish();
						}
						'step 1'
						player.lose(result.cards,ui.special);
						player.storage.tunchu=player.storage.tunchu.concat(result.cards);
						player.markSkill('tunchu');
						player.syncStorage('tunchu');
					}
				},
				disable:{
					mod:{
						cardEnabled:function(card,player){
							if(player.storage.tunchu&&player.storage.tunchu.length&&
								(card.name=='sha'||card.name=='juedou')){
								return false;
							}
						},
						cardUsable:function(card,player){
							if(player.storage.tunchu&&player.storage.tunchu.length&&
								(card.name=='sha'||card.name=='juedou')){
								return false;
							}
						},
					}
				}
			}
		},
		shuliang:{
			audio:2,
			trigger:{global:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				return player.storage.tunchu&&player.storage.tunchu.length>0&&event.player.num('h')==0&&event.player.isAlive();
			},
			content:function(){
				'step 0'
				var goon=(ai.get.attitude(player,trigger.player)>0);
				player.chooseCardButton(get.prompt('shuliang',trigger.player),player.storage.tunchu).set('ai',function(){
					if(_status.event.goon) return 1;
					return 0;
				}).set('goon',goon);
				'step 1'
				if(result.bool){
					player.logSkill('shuliang',trigger.player);
					player.storage.tunchu.remove(result.links[0]);
					player.$throw(result.links);
					ui.discardPile.appendChild(result.links[0]);
					player.syncStorage('tunchu');
					if(player.storage.tunchu.length==0){
						player.unmarkSkill('tunchu');
					}
					trigger.player.draw(2);
				}
			}
		},
		jieyuan:{
			group:['jieyuan_more','jieyuan_less'],
			subSkill:{
				more:{
					audio:true,
					trigger:{source:'damageBegin'},
					direct:true,
					filter:function(event,player){
						if(!player.num('h',{color:'black'})) return false;
						return event.player.hp>=player.hp&&player!=event.player;
					},
					content:function(){
						'step 0'
						var goon=(ai.get.attitude(player,trigger.player)<0);
						var next=player.chooseToDiscard(get.prompt('jieyuan',trigger.player),{color:'black'});
						next.set('ai',function(card){
							if(_status.event.goon){
								return 8-ai.get.value(card);
							}
							return 0;
						});
						next.set('goon',goon);
						next.logSkill=['jieyuan_more',trigger.player];
						'step 1'
						if(result.bool){
							trigger.num++;
						}
					}
				},
				less:{
					audio:true,
					trigger:{player:'damageBegin'},
					filter:function(event,player){
						if(!player.num('h',{color:'red'})) return false;
						return event.source&&event.source.hp>=player.hp&&player!=event.source;
					},
					direct:true,
					content:function(){
						"step 0"
						var next=player.chooseToDiscard('竭缘：是否弃置一张红色手牌令伤害-1？',{color:'red'});
						next.set('ai',function(card){
							var player=_status.event.player;
							if(player.hp==1||_status.event.getTrigger().num>1){
								return 9-ai.get.value(card);
							}
							if(player.hp==2){
								return 8-ai.get.value(card);
							}
							return 7-ai.get.value(card);
						});
						next.logSkill='jieyuan_less';
						"step 1"
						if(result.bool){
							game.delay();
							trigger.num--;
						}
					}
				}
			},
			ai:{
				expose:0.2,
				threaten:1.5
			}
		},
		fenxin:{
			mode:['identity'],
			trigger:{source:'dieBegin'},
			init:function(player){
				player.storage.fenxin=false;
			},
			intro:{
				content:'limited'
			},
			skillAnimation:'epic',
			audio:2,
			mark:true,
			filter:function(event,player){
				if(player.storage.fenxin) return false;
				return event.player.identity!='zhu'&&player.identity!='zhu'&&
					player.identity!='mingzhong'&&event.player.identity!='mingzhong';
			},
			check:function(event,player){
				if(player.identity==event.player.identity) return Math.random()<0.5;
				var stat=ai.get.situation();
				switch(player.identity){
					case 'fan':
						if(stat<0) return false;
						if(stat==0) return Math.random()<0.6;
						return true;
					case 'zhong':
						if(stat>0) return false;
						if(stat==0) return Math.random()<0.6;
						return true;
					case 'nei':
						if(event.player.identity=='fan'&&stat<0) return true;
						if(event.player.identity=='zhong'&&stat>0) return true;
						if(stat==0) return Math.random()<0.7;
						return false;
				}
			},
			prompt:function(event,player){
				return '焚心：是否与'+get.translation(event.player)+'交换身份？';
			},
			content:function(){
				game.broadcastAll(function(player,target,shown){
					var identity=player.identity;
					player.identity=target.identity;
					if(shown||player==game.me){
						player.setIdentity();
					}
					target.identity=identity;
				},player,trigger.player,trigger.player.identityShown);
				player.line(trigger.player,'green');
				player.storage.fenxin=true;
				player.awakenSkill('fenxin');
			}
		},
		qingyi:{
			group:['qingyi1','qingyi2']
		},
		qingyi1:{
			audio:true,
			trigger:{player:'phaseBegin'},
			direct:true,
			content:function(){
				"step 0"
				player.addSkill('qingyi3');
				var check= player.num('h')>2;
				player.chooseTarget(get.prompt('qingyi'),function(card,player,target){
					if(player==target) return false;
					return player.canUse({name:'sha'},target);
				}).ai=function(target){
					if(!check) return 0;
					return ai.get.effect(target,{name:'sha'},_status.event.player);
				}
				"step 1"
				if(result.bool){
					player.logSkill('qingyi1',result.targets);
					player.useCard({name:'sha'},result.targets[0],false);
					player.skip('phaseJudge');
					player.skip('phaseDraw');
				}
				player.removeSkill('qingyi3');
			}
		},
		qingyi2:{
			audio:true,
			trigger:{player:'phaseUseBefore'},
			direct:true,
			filter:function(event,player){
				return player.num('he',{type:'equip'})>0;
			},
			content:function(){
				"step 0"
				player.addSkill('qingyi3');
				var check=player.num('h')<=player.hp;
				player.chooseCardTarget({
					prompt:get.prompt('qingyi'),
					filterCard:function(card,player){
						return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player);
					},
					position:'he',
					filterTarget:function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target);
					},
					ai1:function(card){
						if(!_status.event.check) return 0;
						return 6-ai.get.value(card);
					},
					ai2:function(target){
						if(!_status.event.check) return 0;
						return ai.get.effect(target,{name:'sha'},_status.event.player);
					},
					check:check
				});
				"step 1"
				if(result.bool){
					player.logSkill('qingyi2',result.targets);
					player.discard(result.cards[0]);
					player.useCard({name:'sha'},result.targets[0]);
					trigger.untrigger();
					trigger.finish();
				}
				player.removeSkill('qingyi3');
			}
		},
		qingyi3:{
			mod:{
				targetInRange:function(card,player,target,now){
					return true;
				}
			},
		},
		shixin:{
			audio:2,
			trigger:{player:'damageBefore'},
			filter:function(event){
				return event.nature=='fire';
			},
			forced:true,
			content:function(){
				trigger.untrigger();
				trigger.finish();
			},
			ai:{
				nofire:true,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'fireDamage')) return 0;
					}
				}
			}
		},
		fenyin:{
			audio:2,
			trigger:{player:'useCard'},
			frequent:true,
			usable:3,
			filter:function(event,player){
				if(!event.cards||event.cards.length!=1) return false;
				if(_status.currentPhase!=player) return false;
				if(!player.storage.fenyin) return false;
				return get.color(player.storage.fenyin)!=get.color(event.cards[0]);
			},
			content:function(){
				player.draw();
			},
			intro:{
				content:'card'
			},
			group:['fenyin2','fenyin3']
		},
		fenyin3:{
			trigger:{player:'useCard'},
			priority:-1,
			forced:true,
			popup:false,
			silent:true,
			filter:function(event,player){
				if(!event.cards||event.cards.length!=1) return false;
				if(_status.currentPhase!=player) return false;
				return true;
			},
			content:function(){
				player.storage.fenyin=trigger.cards[0];
			}
		},
		fenyin2:{
			trigger:{player:'phaseBefore'},
			forced:true,
			silent:true,
			popup:false,
			priority:10,
			content:function(){
				player.storage.fenyin=null;
			}
		},
		dujin:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
			content:function(){
				trigger.num+=1+Math.floor(player.num('e')/2);
			}
		},
		qirang:{
			audio:2,
			trigger:{player:'equipEnd'},
			frequent:true,
			content:function(){
				player.gain(get.cardPile(function(card){
					return get.type(card,'trick')=='trick';
				}),'gain2');
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(get.type(card)=='equip') return [1,3];
					}
				},
				threaten:1.3
			}
		},
		yuhua:{
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			audio:2,
			filter:function(event,player){
				return event.parent.name=='phaseDiscard'&&player.num('h',{type:'basic'})<player.num('h');
			},
			content:function(){},
			mod:{
				maxHandcard:function(player,num){
					var hs=player.get('h');
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])!='basic'){
							num++;
						}
					}
					return num;
				},
				cardDiscardable:function(card,player,name){
					if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
				}
			},
		},
		chenqing:{
			trigger:{global:'dying'},
			priority:6,
			filter:function(event,player){
				return event.player.hp<=0&&!player.hasSkill('chenqing2');
			},
			direct:true,
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('chenqing'),function(card,player,target){
					return target!=player&&target!=_status.event.getTrigger().player;
				}).set('ai',function(target){
					var player=_status.event.player;
					var trigger=_status.event.getTrigger();
					if(ai.get.attitude(player,trigger.player)>0){
						var att1=ai.get.attitude(target,player);
						var att2=ai.get.attitude(target,trigger.player);
						var att3=ai.get.attitude(player,target);
						if(att3<0) return 0;
						return att1/2+att2+att3;
					}
					else{
						return 0;
						// return ai.get.attitude(player,target);
					}
				});
				'step 1'
				if(result.bool){
					player.addTempSkill('chenqing2',{player:'phaseBegin'});
					event.target=result.targets[0];
					event.target.draw(4);
					player.logSkill('chenqing',event.target);
				}
				else{
					event.finish();
				}
				'step 2'
				var target=event.target;
				var tosave=trigger.player;
				var att=ai.get.attitude(target,tosave);
				var hastao=target.num('h','tao');
				target.chooseToDiscard(4,true,'he').set('ai',function(card){
					var hastao=_status.event.hastao;
					var att=_status.event.att;
					if(!hastao&&att>0){
						var suit=get.suit(card);
						for(var i=0;i<ui.selected.cards.length;i++){
							if(get.suit(ui.selected.cards[i])==suit){
								return -4-ai.get.value(card);
							}
						}
					}
					if(att<0&&ui.selected.cards.length==3){
						var suit=get.suit(card);
						for(var i=0;i<ui.selected.cards.length;i++){
							if(get.suit(ui.selected.cards[i])==suit){
								return -ai.get.value(card);
							}
						}
						return -10-ai.get.value(card);
					}
					return -ai.get.value(card);
				}).set('hastao',hastao).set('att',att);
				'step 3'
				if(result.cards&&result.cards.length==4){
					var suits=[];
					for(var i=0;i<result.cards.length;i++){
						suits.add(get.suit(result.cards[i]));
					}
					if(suits.length==4){
						event.target.useCard({name:'tao'},trigger.player);
					}
				}
			},
			ai:{
				skillTagFilter:function(player){
					return !player.hasSkill('chenqing2');
				},
				expose:0.2,
				threaten:1.5,
				save:true,
			}
		},
		mozhi:{
			intro:{
				content:'cards'
			},
			init:function(player){
				player.storage.mozhi=[];
			},
			trigger:{player:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				return player.storage.mozhi.length>0&&player.num('h')>0;
			},
			content:function(){
				if(player.storage.mozhi.length&&player.num('h')){
					var card=player.storage.mozhi.shift();
					card={name:card.name,nature:card.nature,suit:card.suit,number:card.number};
					if(lib.filter.cardEnabled(card)){
						if(game.hasPlayer(function(current){
							return player.canUse(card,current);
						})){
							lib.skill.mozhix.viewAs=card;
							var next=player.chooseToUse();
							if(next.isOnline()){
								player.send(function(card){
									lib.skill.mozhix.viewAs=card;
								},card)
							}
							next.logSkill='mozhi';
							next.set('openskilldialog','默识：将一张手牌当'+get.translation(card)+'使用');
							next.set('norestore',true);
							next.set('_backupevent','mozhix');
							next.backup('mozhix');
						}
					}
					event.redo();
				}
			},
			group:['mozhi2','mozhi3']
		},
		mozhix:{
			filterCard:true,
			selectCard:1,
			popname:true,
		},
		mozhi2:{
			trigger:{player:'phaseAfter'},
			forced:true,
			silent:true,
			popup:false,
			content:function(){
				player.storage.mozhi.length=0;
				player.unmarkSkill('mozhi');
			}
		},
		mozhi3:{
			trigger:{player:'useCard'},
			forced:true,
			silent:true,
			popup:false,
			filter:function(event,player){
				if(_status.currentPhase!=player) return false;
				if(event.parent.parent.name!='phaseUse') return false;
				var type=get.type(event.card);
				return player.storage.mozhi.length<2&&(type=='basic'||type=='trick');
			},
			content:function(){
				player.storage.mozhi.add(trigger.card);
				if(player.get('s').contains('mozhi')) player.markSkill('mozhi');
			}
		},
		chenqing2:{},
		ranshang:{
			audio:2,
			trigger:{player:'damageEnd'},
			filter:function(event,player){
				return event.nature=='fire';
			},
			init:function(player){
				player.storage.ranshang=0;
			},
			forced:true,
			check:function(){
				return false;
			},
			content:function(){
				if(player.storage.ranshang){
					player.storage.ranshang++;
				}
				else{
					player.storage.ranshang=1;
				}
				player.markSkill('ranshang');
				game.addVideo('storage',player,['ranshang',player.storage.ranshang]);
			},
			intro:{
				content:'mark'
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(card.name=='sha'){
							if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
						}
						if(get.tag(card,'fireDamage')&&current<0) return 2;
					}
				}
			},
			group:'ranshang2'
		},
		ranshang2:{
			audio:2,
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.storage.ranshang>0;
			},
			content:function(){
				player.loseHp(player.storage.ranshang);
			}
		},
		hanyong:{
			trigger:{player:'useCard'},
			filter:function(event,player){
				return player.storage.hanyong>player.hp&&event.card&&
					(event.card.name=='nanman'||event.card.name=='wanjian');
			},
			content:function(){
				player.addTempSkill('hanyong3','useCardAfter');
			},
			init:function(player){
				player.storage.hanyong=0;
			},
			group:'hanyong2'
		},
		hanyong2:{
			audio:false,
			trigger:{player:'phaseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				player.storage.hanyong++;
			}
		},
		hanyong3:{
			audio:false,
			trigger:{source:'damageBegin'},
			forced:true,
			filter:function(event,player){
				return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian');
			},
			content:function(){
				trigger.num++;
			}
		},
		yishe:{
			trigger:{player:'phaseEnd'},
			init:function(player){
				player.storage.yishe=[];
			},
			filter:function(event,player){
				return !player.storage.yishe||!player.storage.yishe.length;
			},
			intro:{
				content:'cards'
			},
			content:function(){
				'step 0'
				player.draw(2);
				player.chooseCard(2,'he',true,'选择两张牌作为“米”');
				'step 1'
				player.storage.yishe=result.cards;
				player.lose(result.cards,ui.special);
				player.syncStorage('yishe');
				player.markSkill('yishe');
			}
		},
		bushi:{
			trigger:{player:'damageEnd',source:'damageEnd'},
			filter:function(event,player){
				return player.storage.yishe&&player.storage.yishe.length&&event.player.isAlive();
			},
			direct:true,
			content:function(){
				'step 0'
				trigger.player.chooseCardButton('选择获得一张“米”',player.storage.yishe);
				'step 1'
				if(result.bool){
					player.logSkill('bushi');
					trigger.player.gain(result.links[0],'draw2','log');
					player.storage.yishe.remove(result.links[0]);
					player.syncStorage('yishe');
					if(player.storage.yishe.length==0){
						player.recover();
						player.unmarkSkill('yishe');
					}
					else{
						player.markSkill('yishe');
					}
				}
			}
		},
		midao:{
			unique:true,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.storage.yishe&&player.storage.yishe.length&&event.player.isAlive();
			},
			content:function(){
				"step 0"
				var list=player.storage.yishe;
				player.chooseButton([get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+
					'，'+get.prompt('midao'),list,'hidden'],function(button){
					var card=button.link;
					var trigger=_status.event.getTrigger();
					var player=_status.event.player;
					var judging=_status.event.judging;
					var result=trigger.judge(card)-trigger.judge(judging);
					var attitude=ai.get.attitude(player,trigger.player);
					return result*attitude;
				}).set('judging',trigger.player.judging);
				"step 1"
				if(result.bool){
					player.logSkill('midao',trigger.player);
					var card=result.links[0];
					player.storage.yishe.remove(card);
					player.syncStorage('yishe');
					if(player.storage.yishe.length==0){
						player.recover();
						player.unmarkSkill('yishe');
					}
					else{
						player.markSkill('yishe');
					}

					player.$throw(card);
					game.broadcastAll(function(card){
						if(card.clone){
							card.clone.classList.add('thrownhighlight');
						}
					},card);
					if(trigger.player.judging[0].clone){
						trigger.player.judging[0].clone.classList.remove('thrownhighlight');
						game.broadcast(function(card){
							if(card.clone){
								card.clone.classList.remove('thrownhighlight');
							}
						},trigger.player.judging[0]);
						game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
					}
					trigger.player.judging[0]=card;
					trigger.position.appendChild(card);
					game.log(player,'的判定牌改为',card);
					game.delay(2);
				}
			},
			ai:{
				tag:{
					rejudge:0.6
				}
			}
		},
		fengpo:{
			audio:2,
			trigger:{player:['shaBegin','juedouBegin']},
			filter:function(event,player){
				if(player.hasSkill('fengpo3')) return false;
				return event.target&&event.targets&&event.targets.length==1;
			},
			direct:true,
			content:function(){
				'step 0'
				player.addTempSkill('fengpo3','phaseAfter');
				player.chooseControl('draw_card','加伤害','cancel2').set('prompt',get.prompt('fengpo'));
				'step 1'
				if(result.control&&result.control!='cancel2'){
					player.logSkill('fengpo');
					var nd=trigger.target.num('h',{suit:'diamond'});
					if(result.control=='draw_card'){
						player.draw(nd);
					}
					else{
						player.addTempSkill('fengpo2','useCardToAfter');
						player.storage.fengpo=nd;
					}
				}
			}
		},
		fengpo2:{
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
			},
			forced:true,
			audio:false,
			content:function(){
				if(typeof player.storage.fengpo=='number'){
					trigger.num+=player.storage.fengpo;
				}
			}
		},
		fengpo3:{},
		biluan:{
			trigger:{player:'phaseDrawBefore'},
			mark:true,
			unique:true,
			intro:{
				content:function(storage){
					if(storage>0){
						return '防御距离+'+storage;
					}
					else if(storage<0){
						return '防御距离'+storage;
					}
					else{
						return '无距离变化';
					}
				}
			},
			init:function(player){
				player.storage.biluan=0;
			},
			check:function(event,player){
				if(player.num('h')>player.hp) return true;
				if(player.num('j','lebu')) return true;
				var ng=[];
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].group!='unknown'){
						ng.add(players[i].group);
					}
				}
				ng=ng.length;
				if(ng<2) return false;
				var nai=0;
				for(var i=0;i<players.length;i++){
					if(players[i]!=player){
						var dist=get.distance(players[i],player,'attack');
						if(dist<=1&&dist+ng>1){
							nai++;
						}
					}
				}
				return nai>=2;
			},
			filter:function(event,player){
				return game.hasPlayer(function(current){
					return current!=player&&get.distance(current,player)<=1;
				});
			},
			content:function(){
				var ng=[];
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].group!='unknown'){
						ng.add(players[i].group);
					}
				}
				player.$damagepop(ng.length,'unknownx');
				player.storage.biluan+=ng.length;
				player.markSkill('biluan');
				game.addVideo('storage',player,['biluan',player.storage.biluan]);
				trigger.untrigger();
				trigger.finish();
			},
			mod:{
				globalTo:function(from,to,distance){
					if(typeof to.storage.biluan=='number'){
						return distance+to.storage.biluan;
					}
				}
			}
		},
		lixia:{
			trigger:{global:'phaseEnd'},
			filter:function(event,player){
				return event.player.isAlive()&&event.player!=player&&get.distance(event.player,player,'attack')>1;
			},
			forced:true,
			content:function(){
				'step 0'
				player.chooseTarget(function(card,player,target){
					return target==player||target==_status.event.getTrigger().player;
				},true,'礼下：选择一个目标摸一张牌').set('ai',function(target){
					return player==target?1:0;
				});
				'step 1'
				if(result.targets.length){
					result.targets[0].draw();
					player.line(result.targets[0],'green');
				}
				player.storage.biluan--;
				player.markSkill('biluan');
				game.addVideo('storage',player,['biluan',player.storage.biluan]);
			}
		},
		fuji:{
			trigger:{global:'damageBegin'},
			filter:function(event){
				return event.source&&event.nature=='thunder';
			},
			check:function(event,player){
				return ai.get.attitude(player,event.source)>0&&ai.get.attitude(player,event.player)<0;
			},
			prompt:function(event){
				return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('fuji');
			},
			content:function(){
				"step 0"
				trigger.source.judge(ui.special);
				"step 1"
				if(result.color=='black'){
					result.card.goto(ui.discardPile);
					trigger.num++;
				}
				else{
					trigger.source.gain(result.card);
					trigger.source.$gain2(result.card);
				}
			}
		},
		fulu:{
			enable:'chooseToUse',
			filterCard:function(card){
				return card.name=='sha'&&!card.nature;
			},
			viewAs:{name:'sha',nature:'thunder'},
			ai:{
				order:function(){
					return lib.card.sha.ai.order+0.1;
				}
			}
		},
		guiming:{
			unique:true,
			zhuSkill:true,
		},
		canshi:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
			check:function(event,player){
				var num=game.countPlayer(function(current){
					if(player.hasZhuSkill('guiming')&&current.group=='wu') return true;
					return current.isDamaged();
				});
				return num>3;
			},
			prompt:function(event,player){
				var num=game.countPlayer(function(current){
					if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
					return current.isDamaged();
				});
				return '残蚀：是否改为摸'+get.cnNumber(num)+'张牌？';
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				var num=game.countPlayer(function(current){
					if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
					return current.isDamaged();
				});
				if(num>0){
					player.draw(num);
				}
				player.addTempSkill('canshi2','phaseAfter');
			}
		},
		canshi2:{
			trigger:{player:'useCard'},
			forced:true,
			filter:function(event,player){
				if(player.num('he')==0) return false;
				var type=get.type(event.card,'trick');
				return type=='basic'||type=='trick';
			},
			content:function(){
				game.delay(0.5);
				player.chooseToDiscard(true,'he');
			}
		},
		chouhai:{
			audio:2,
			trigger:{player:'damageBegin'},
			forced:true,
			check:function(){
				return false;
			},
			filter:function(event,player){
				return player.num('h')==0;
			},
			content:function(){
				trigger.num++;
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'damage')&&target.num('h')==0) return [1,-2];
					}
				}
			}
		},
		kunfen:{
			audio:2,
			trigger:{player:'phaseEnd'},
			direct:true,
			content:function(){
				"step 0"
				if(player.storage.kunfen||
				(lib.config.mode=='guozhan'&&player.hiddenSkills.contains('kunfen'))){
					if(!player.storage.kunfen){
						event.skillHidden=true;
					}
					player.chooseBool(get.prompt('kunfen')).set('ai',function(){
						var player=_status.event.player;
						if(player.hp>3) return true;
						if(player.hp==3&&player.num('h')<3) return true;
						if(player.hp==2&&player.num('h')==0) return true;
						return false;
					});
				}
				else{
					event.forced=true;
				}
				"step 1"
				if(event.forced||result.bool){
					player.logSkill('kunfen');
					player.loseHp();
				}
				else{
					event.finish();
				}
				"step 2"
				player.draw(2);
			},
			ai:{
				threaten:1.5
			}
		},
		fengliang:{
			skillAnimation:true,
			unique:true,
			audio:2,
			trigger:{player:'dying'},
			priority:10,
			forced:true,
			filter:function(event,player){
				return !player.storage.kunfen;
			},
			content:function(){
				"step 0"
				player.loseMaxHp();
				"step 1"
				if(player.hp<2){
					player.recover(2-player.hp);
				}
				"step 2"
				player.addSkill('tiaoxin');
				player.storage.kunfen=true;
				player.awakenSkill('fengliang');
			},
		},
		zhuiji:{
			mod:{
				globalFrom:function(from,to){
					if(from.hp>to.hp) return -Infinity;
				}
			}
		},
		cihuai:{
			trigger:{player:'phaseUseBegin'},
			direct:true,
			filter:function(event,player){
				return player.num('h','sha')==0;
			},
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('cihuai'),function(card,player,target){
					return player.canUse({name:'sha'},target);
				}).set('ai',function(target){
					var player=_status.event.player;
					return ai.get.effect(target,{name:'sha'},player,player);
				});
				"step 1"
				if(result.bool){
					player.logSkill('cihuai');
					player.showHandcards();
					player.useCard({name:'sha'},result.targets);
				}
			},
			ai:{
				expose:0.2,
			}
		},
		jilei:{
			trigger:{player:'damageEnd'},
			priority:9,
			audio:2,
			direct:true,
			filter:function(event){
				return event&&event.source;
			},
			content:function(){
				'step 0'
				player.chooseControl('basic','trick','equip','cancel2',function(){
					var source=_status.event.source;
					if(ai.get.attitude(_status.event.player,source)>0) return 'cancel2';
					if(_status.currentPhase!=source) return 'trick';
					if(lib.filter.cardUsable({name:'sha'},source)&&source.num('h')>=2) return 'basic';
					return 'trick';
				}).set('prompt',get.prompt('jilei',trigger.source)).set('source',trigger.source);
				'step 1'
				if(result.control!='cancel2'){
					player.logSkill('jilei',trigger.source);
					player.popup(get.translation(result.control)+'牌');
					trigger.source.storage.jilei2=result.control;
					trigger.source.addTempSkill('jilei2','phaseAfter');
				}
			},
			ai:{
				threaten:0.7
			}
		},
		jilei2:{
			unique:true,
			intro:{
				content:function(storage){
					return '不能使用、打出或弃置'+get.translation(storage)+'牌';
				}
			},
			mark:true,
			onremove:true,
			mod:{
				cardDiscardable:function(card,player){
					if(player.storage.jilei2==get.type(card,'trick')) return false;
				},
				cardEnabled:function(card,player){
					if(player.storage.jilei2==get.type(card,'trick')) return false;
				},
				cardUsable:function(card,player){
					if(player.storage.jilei2==get.type(card,'trick')) return false;
				},
				cardRespondable:function(card,player){
					if(player.storage.jilei2==get.type(card,'trick')) return false;
				},
				cardSavable:function(card,player){
					if(player.storage.jilei2==get.type(card,'trick')) return false;
				},
			},
		},
		danlao:{
			priority:9,
			audio:2,
			filter:function(event,player){
				return event.player!=player&&get.type(event.card)=='trick'&&event.targets&&event.targets.length>1;
			},
			check:function(event,player){
				return get.tag(event.card,'multineg')||ai.get.effect(player,event.card,event.player,player)<=0;
			},
			trigger:{target:'useCardToBefore'},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				player.draw();
			},
			ai:{
				effect:{
					target:function(card){
						if(get.type(card)!='trick') return;
						if(card.name=='tiesuo') return [0,0];
						if(card.name=='yihuajiemu') return [0,1];
						if(get.tag(card,'multineg')) return [0,2];
					}
				}
			}
		},
		taichen:{
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player.canUse('sha',target);
			},
			content:function(){
				"step 0"
				player.loseHp();
				"step 1"
				player.useCard({name:'sha'},target,false);
			},
			ai:{
				order:1,
				result:{
					target:function(player,target){
						if(player.hp>2&&player.hp>target.hp&&target.num('he')<4){
							return ai.get.effect(target,{name:'sha'},player,target);
						}
						return 0;
					}
				}
			}
		},
		manjuan:{
			audio:true,
			trigger:{global:'discardAfter'},
			filter:function(event,player){
				if(event.player==player) return false;
				if(!player.num('he')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])=='d'){
						return true;
					}
				}
				return false;
			},
			direct:true,
			unique:true,
			gainable:true,
			content:function(){
				"step 0"
				if(trigger.delay==false) game.delay();
				"step 1"
				var cards=[];
				var suits=['club','spade','heart','diamond']
				for(var i=0;i<trigger.cards.length;i++){
					if(get.position(trigger.cards[i])=='d'){
						cards.push(trigger.cards[i]);
						suits.remove(get.suit(trigger.cards[i]));
					}
				}
				if(cards.length){
					var maxval=0;
					for(var i=0;i<cards.length;i++){
						var tempval=ai.get.value(cards[i]);
						if(tempval>maxval){
							maxval=tempval;
						}
					}
					maxval+=cards.length-1;
					var next=player.chooseToDiscard('he',{suit:suits});
					next.set('ai',function(card){
						return _status.event.maxval-ai.get.value(card);
					});
					next.set('maxval',maxval);
					next.set('dialog',[get.prompt(event.name),'hidden',cards])
					next.logSkill=event.name;
					event.cards=cards;
				}
				"step 2"
				if(result.bool){
					player.gain(event.cards,'gain2','log');
				}
			},
			ai:{
				threaten:1.3
			}
		},
		zuixiang:{
			skillAnimation:true,
			audio:true,
			unique:true,
			mark:true,
			trigger:{player:'phaseBegin'},
			priority:10,
			filter:function(event,player){
				if(player.storage.zuixiang) return false;
				return true;
			},
			check:function(event,player){
				return player.num('h')<player.hp&&player.hp==player.maxHp;
			},
			content:function(){
				"step 0"
				player.storage.zuixiang=get.cards(3);
				player.showCards(player.storage.zuixiang);
				player.markSkill('zuixiang');
				player.syncStorage('zuixiang');
				"step 1"
				var cards=player.storage.zuixiang;
				if(cards[0].number==cards[1].number||
					cards[0].number==cards[2].number||
					cards[2].number==cards[1].number){
					player.gain(player.storage.zuixiang,'draw2');
					player.storage.zuixiang=[];
					player.awakenSkill('zuixiang');
					delete player.storage.zuixiang2;
				}
				else{
					player.storage.zuixiang2=[];
					for(var i=0;i<cards.length;i++){
						player.storage.zuixiang2.add(get.type(cards[i],'trick'));
					}
				}
				player.storage.zuixiangtemp=true;
			},
			group:'zuixiang2',
			intro:{
				content:'cards'
			},
			mod:{
				targetEnabled:function(card,player,target){
					if(target.storage.zuixiang2&&target.storage.zuixiang2.contains(get.type(card,'trick'))){
						return false;
					}
				},
				cardEnabled:function(card,player){
					if(player.storage.zuixiang2&&player.storage.zuixiang2.contains(get.type(card,'trick'))){
						return false;
					}
				},
				cardUsable:function(card,player){
					if(player.storage.zuixiang2&&player.storage.zuixiang2.contains(get.type(card,'trick'))){
						return false;
					}
				},
				cardRespondable:function(card,player){
					if(player.storage.zuixiang2&&player.storage.zuixiang2.contains(get.type(card,'trick'))){
						return false;
					}
				},
				cardSavable:function(card,player){
					if(player.storage.zuixiang2&&player.storage.zuixiang2.contains(get.type(card,'trick'))){
						return false;
					}
				}
			}
		},
		zuixiang2:{
			unique:true,
			trigger:{player:'phaseBegin'},
			priority:9.5,
			filter:function(event,player){
				if(player.storage.zuixiang&&player.storage.zuixiang.length) return true;
				return false;
			},
			forced:true,
			popup:false,
			content:function(){
				"step 0"
				if(player.storage.zuixiangtemp){
					delete player.storage.zuixiangtemp;
					event.finish();
				}
				else{
					for(var i=0;i<player.storage.zuixiang.length;i++){
						ui.discardPile.appendChild(player.storage.zuixiang[i]);
					}
					player.storage.zuixiang=get.cards(3);
					player.showCards(player.storage.zuixiang);
					player.markSkill('zuixiang');
					player.syncStorage('zuixiang');
				}
				"step 1"
				var cards=player.storage.zuixiang;
				if(cards[0].number==cards[1].number||
					cards[0].number==cards[2].number||
					cards[2].number==cards[1].number){
					player.gain(player.storage.zuixiang,'draw2');
					player.storage.zuixiang=[];
					player.awakenSkill('zuixiang');
					delete player.storage.zuixiang2;
				}
				else{
					player.storage.zuixiang2=[];
					for(var i=0;i<cards.length;i++){
						player.storage.zuixiang2.add(get.type(cards[i]));
					}
				}
			},
		},
		naman:{
			audio:2,
			trigger:{global:'respondEnd'},
			filter:function(event,player){
				if(event.card.name!='sha') return false;
				if(event.player==player) return false;
				if(event.cards){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d') return true;
					}
				}
				return false;
			},
			frequent:true,
			content:function(){
				var cards=trigger.cards.slice(0);
				for(var i=0;i<cards.length;i++){
					if(get.position(cards[i])!='d'){
						cards.splice(i--,1);
					}
				}
				game.delay(0.5);
				player.gain(cards,'gain2');
			},
		},
		xiemu:{
			audio:2,
			trigger:{target:'useCardToBegin'},
			filter:function(event,player){
				if(get.color(event.card)!='black') return false;
				if(!event.player) return false;
				if(event.player==player) return false;
				return player.num('h','sha')>0;
			},
			direct:true,
			content:function(){
				"step 0"
				var next=player.chooseToDiscard('协穆：是否弃置一张杀并摸两张牌？',{name:'sha'});
				next.set('ai',function(card){
					return 9-ai.get.value(card);
				});
				next.logSkill='xiemu';
				"step 1"
				if(result.bool){
					player.draw(2);
				}
			},
			ai:{
				effect:{
					target:function(card,player,target){
						if(get.color(card)=='black'&&target.num('h')>0){
							return [1,0.5];
						}
					}
				}
			}
		},
		spmengjin:{
			trigger:{player:'shaBegin'},
			filter:function(event,player){
				return event.target.num('he')>0;
			},
			direct:true,
			content:function(){
				"step 0"
				var att=ai.get.attitude(player,trigger.target);
				player.choosePlayerCard(get.prompt('spmengjin',trigger.target),'he',trigger.target).ai=function(button){
					var val=ai.get.buttonValue(button);
					if(att>0) return -val;
					return val;
				};
				"step 1"
				if(result.bool){
					trigger.target.discard(result.links);
					player.logSkill('spmengjin',trigger.target);
					trigger.target.addTempSkill('mengjin2','shaAfter');
				}
			},
			ai:{
				expose:0.2
			}
		},
		fenxun_old:{
			audio:2,
			trigger:{player:'shaBefore'},
			direct:true,
			filter:function(event,player){
				return event.targets.length==1;
			},
			position:'he',
			content:function(){
				"step 0"
				player.chooseCardTarget({
					filterCard:lib.filter.cardDiscardable,
					filterTarget:function(card,player,target){
						var trigger=_status.event.getTrigger();
						return lib.filter.targetEnabled(trigger.card,player,target)&&target!=trigger.targets[0];
					},
					ai1:function(card){
						return 6-ai.get.value(card);
					},
					ai2:function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return ai.get.effect(target,trigger.card,player,player);
					},
					prompt:get.prompt('fenxun')
				});
				"step 1"
				if(result.bool){
					player.discard(result.cards);
					trigger.targets.push(result.targets[0]);
					player.logSkill('fenxun',result.targets);
				}
			}
		},
		zhoufu:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterCard:true,
			filterTarget:function(card,player,target){
				return player!=target&&!target.hasSkill('zhoufu2');
			},
			prepare:'throw',
			discard:false,
			content:function(){
				target.$gain2(cards);
				target.storage.zhoufu2=cards[0];
				target.addSkill('zhoufu2');
				target.storage.zhoufu3=player;
				ui.special.appendChild(cards[0]);
				target.syncStorage('zhoufu2');
			},
			check:function(card){
				return 3-ai.get.value(card)
			},
			ai:{
				expose:0.1,
				order:1,
				result:{
					player:1
				}
			}
		},
		zhoufu2:{
			trigger:{player:'judge'},
			forced:true,
			priority:10,
			mark:'card',
			content:function(){
				"step 0"
				player.$throw(player.storage.zhoufu2);
				game.broadcastAll(function(card){
					if(card.clone){
						card.clone.classList.add('thrownhighlight');
					}
				},player.storage.zhoufu2);
				if(player.judging[0].clone){
					player.judging[0].clone.classList.remove('thrownhighlight');
					game.broadcast(function(card){
						if(card.clone){
							card.clone.classList.remove('thrownhighlight');
						}
					},player.judging[0]);
					game.addVideo('deletenode',player,get.cardsInfo([player.judging[0].clone]));
				}
				player.judging[0]=player.storage.zhoufu2;
				trigger.position.appendChild(player.storage.zhoufu2);
				game.log(player,'的判定牌改为',player.storage.zhoufu2);
				game.delay(2);
				"step 1"
				if(player.storage.zhoufu3.isAlive()&&player.storage.zhoufu3.get('s').contains('yingbin')){
					player.storage.zhoufu3.logSkill('yingbin');
					player.storage.zhoufu3.draw(2);
				}
				player.removeSkill('zhoufu2');
				delete player.storage.zhoufu2;
				delete player.storage.zhoufu3;
			},
			intro:{
				content:'card'
			},
			group:'zhoufu3'
		},
		zhoufu3:{
			trigger:{player:'phaseEnd'},
			forced:true,
			content:function(){
				if(player.storage.zhoufu2){
					player.unmark(player.storage.zhoufu2.name);
					if(player.storage.zhoufu3.isAlive()){
						player.storage.zhoufu3.gain(player.storage.zhoufu2);
						player.$give(player.storage.zhoufu2,player.storage.zhoufu3);
						game.delay();
					}
					else{
						ui.discardPile.appendChild(player.storage.zhoufu2);
					}
				}
				player.removeSkill('zhoufu2');
				delete player.storage.zhoufu2;
				delete player.storage.zhoufu3;
			},
		},
		yingbin:{
			audio:2,
		},
		kuiwei:{
			audio:2,
			trigger:{player:'phaseEnd'},
			check:function(event,player){
				if(player.isTurnedOver()) return true;
				var num=game.countPlayer(function(current){
					return current.get('e','1');
				});
				return num>1;
			},
			content:function(){
				"step 0"
				player.turnOver();
				"step 1"
				var num=game.countPlayer(function(current){
					return current.get('e','1');
				});
				player.draw(2+num);
				player.addSkill('kuiwei2');
			},
			ai:{
				effect:{
					target:function(card){
						if(card.name=='guiyoujie') return [0,2];
					}
				}
			}
		},
		kuiwei2:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			audio:false,
			content:function(){
				var num=game.countPlayer(function(current){
					return current.get('e','1');
				});
				if(num>=player.num('he')){
					player.discard(player.get('he'));
				}
				else if(num){
					player.chooseToDiscard('he',num,true);
				}
				player.removeSkill('kuiwei2');
			}
		},
		yanzheng:{
			enable:'chooseToUse',
			audio:2,
			filter:function(event,player){
				return player.hp<player.num('h')&&player.num('e')>0;
			},
			viewAsFilter:function(player){
				return player.hp<player.num('h')&&player.num('e')>0;
			},
			filterCard:true,
			position:'e',
			viewAs:{name:'wuxie'},
			prompt:'将一张装备区内的牌当无懈可击使用',
			check:function(card){return 8-ai.get.equipValue(card)},
			threaten:1.2
		},
		tongji:{
			global:'tongji_disable',
			unique:true,
			gainnable:true,
			subSkill:{
				disable:{
					mod:{
						targetEnabled:function(card,player,target){
							if(player.hasSkill('tongji')) return;
							if(card.name=='sha'){
								if(target.hasSkill('tongji')) return;
								if(game.hasPlayer(function(current){
									return current.hasSkill('tongji')&&current.hp<current.num('h')&&
										get.distance(player,current,'attack')<=1;
								})){
									return false;
								}
							}
						}
					}
				}
			}
		},
		wangzun:{
			audio:2,
			trigger:{global:'phaseBegin'},
			check:function(event,player){
				var att=ai.get.attitude(player,event.player);
				return !game.hasPlayer(function(current){
					return ai.get.attitude(player,current)<att;
				});
			},
			filter:function(event,player){
				return event.player!=player&&!player.storage.wangzun;
			},
			logTarget:'player',
			content:function(){
				player.draw();
				player.markSkill('wangzun');
				player.storage.wangzun=trigger.player;
				trigger.player.addTempSkill('wangzun3','phaseAfter');
			},
			ai:{
				expose:0.2
			},
			intro:{
				content:'player'
			},
			group:'wangzun2'
		},
		wangzun2:{
			trigger:{player:'phaseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				player.unmarkSkill('wangzun');
				player.storage.wangzun=null;
			}
		},
		wangzun3:{
			mod:{
				maxHandcard:function(player,num){
					return num-1;
				}
			}
		},
		kaikang:{
			audio:2,
			trigger:{global:'shaBegin'},
			filter:function(event,player){
				return get.distance(player,event.target)<=1;
			},
			check:function(event,player){
				return ai.get.attitude(player,event.target)>=0;
			},
			content:function(){
				"step 0"
				player.draw();
				if(trigger.target!=player){
					player.chooseCard(true,'he','交给'+get.translation(trigger.target)+'一张牌').set('ai',function(card){
						if(get.position(card)=='e') return -1;
						if(card.name=='shan') return 1;
						if(get.type(card)=='equip') return 0.5;
						return 0;
					});
				}
				else{
					event.finish();
				}
				"step 1"
				trigger.target.gain(result.cards,player);
				player.$give(result.cards,trigger.target);
				game.delay();
				event.card=result.cards[0];
				if(get.type(event.card)!='equip') event.finish();
				"step 2"
				if(!trigger.target.isMin()){
					trigger.target.chooseBool('是否装备'+get.translation(event.card)+'？').set('ai',function(){
						var current=_status.event.player.get('e',{subtype:get.subtype(_status.event.card)});
						if(current&&current.length){
							return ai.get.equipValue(event.card)>ai.get.equipValue(current[0]);
						}
						return true;
					}).set('card',event.card);
				}
				else{
					event.finish();
				}
				"step 3"
				if(result.bool){
					trigger.target.equip(event.card);
				}
			},
			ai:{
				threaten:1.1
			}
		},
		liangzhu:{
			audio:2,
			trigger:{global:'recoverAfter'},
			direct:true,
			filter:function(event,player){
				return _status.currentPhase==event.player;
			},
			content:function(){
				'step 0'
				if(player==trigger.player){
					player.chooseControl('摸一张','摸两张','cancel2',function(){
						return '摸两张';
					}).set('prompt',get.prompt('liangzhu'));
					event.single=true;
				}
				else{
					player.chooseTarget(get.prompt('liangzhu'),function(card,player,target){
						return target==_status.event.player||target==_status.event.target;
					}).set('target',trigger.player).set('ai',function(target){
						var player=_status.event.player;
						if(player==target) return 1;
						return ai.get.attitude(player,target)-1.5;
					});
				}
				'step 1'
				if(event.single){
					if(result.control!='cancel2'){
						player.logSkill('liangzhu',player);
						if(result.control=='摸一张'){
							player.draw();
						}
						else{
							player.draw(2);
							player.storage.liangzhu=player;
						}
					}
				}
				else if(result.bool){
					var target=result.targets[0];
					player.logSkill('liangzhu',target);
					if(target==player){
						target.draw();
					}
					else{
						target.draw(2);
						if(target.storage.liangzhu){
							target.storage.liangzhu.add(player);
						}
						else{
							target.storage.liangzhu=[player];
						}
					}
				}
			},
			ai:{
				expose:0.1
			}
		},
		fanxiang:{
			skillAnimation:true,
			animationColor:'fire',
			audio:2,
			unique:true,
			forceunique:true,
			trigger:{player:'phaseBegin'},
			filter:function(event,player){
				if(player.storage.fanxiang) return false;
				return game.hasPlayer(function(current){
					return current.storage.liangzhu&&current.storage.liangzhu.contains(player)&&current.isDamaged();
				});
			},
			forced:true,
			content:function(){
				player.storage.fanxiang=true;
				player.gainMaxHp();
				player.recover();
				player.removeSkill('liangzhu');
				player.addSkill('xiaoji');
				player.awakenSkill('fanxiang');
			},
		},
		mingshi:{
			audio:2,
			trigger:{player:'damageBegin'},
			direct:true,
			filter:function(event,player){
				return event.source&&event.source.hp>player.hp;
			},
			content:function(){
				"step 0"
				var next=player.chooseToDiscard(get.prompt('mingshi'),{color:'black'});
				next.set('ai',function(card){
					return 9-ai.get.value(card);
				});
				next.set('logSkill','mingshi');
				"step 1"
				if(result.bool){
					trigger.num--;
				}
			},
			ai:{
				threaten:0.8
			}
		},
		lirang:{
			audio:2,
			trigger:{player:'discardAfter'},
			filter:function(event,player){
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])=='d'){
						return true;
					}
				}
				return false;
			},
			direct:true,
			popup:false,
			content:function(){
				"step 0"
				if(trigger.delay==false) game.delay();
				"step 1"
				player.chooseTarget(get.prompt('lirang'),function(card,player,target){
					return player!=target
				}).set('ai',function(target){
					var att=ai.get.attitude(_status.event.player,target);
					if(_status.event.du) return -att;
					return att;
				}).set('du',(trigger.cards.length==1&&trigger.cards[0].name=='du'));
				"step 2"
				if(result.bool){
					var target=result.targets[0];
					player.logSkill('lirang',target);
					var cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.position(trigger.cards[i])=='d'){
							cards.push(trigger.cards[i]);
						}
					}
					target.gain(cards);
					target.$gain2(cards);
					if(target==game.me){
						game.delayx();
					}
				}
			},
			ai:{
				threaten:0.9,
				expose:0.1
			}
		},
		moukui:{
			trigger:{player:'shaBegin'},
			direct:true,
			audio:2,
			content:function(){
				"step 0"
				var controls=['draw_card'];
				if(trigger.target.num('he')){
					controls.push('discard_card');
				}
				controls.push('cancel');
				player.chooseControl(controls).set('ai',function(){
					var trigger=_status.event.getTrigger();
					if(trigger.target.num('he')&&ai.get.attitude(_status.event.player,trigger.target)<0){
						return 'discard_card';
					}
					else{
						return 'draw_card';
					}
				});
				"step 1"
				if(result.control=='draw_card'){
					player.draw();
					player.logSkill('moukui');
				}
				else if(result.control=='discard_card'&&trigger.target.num('he')){
					player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
				}
				else event.finish();
				"step 2"
				player.addTempSkill('moukui2','shaEnd');
			},
			ai:{
				expose:0.1
			}
		},
		moukui2:{
			audio:false,
			trigger:{player:'shaMiss'},
			forced:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				trigger.target.discardPlayerCard(player,true);
			}
		},
		shenxian:{
			audio:2,
			trigger:{global:'discardAfter'},
			filter:function(event,player){
				if(event.player==player||_status.currentPhase==player) return false;
				if(player.hasSkill('shenxian2')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(get.type(event.cards[i])=='basic'){
						return true;
					}
				}
				return false;
			},
			frequent:true,
			content:function(){
				"step 0"
				if(trigger.delay==false) game.delay();
				"step 1"
				player.draw();
				player.addTempSkill('shenxian2','phaseAfter');
			},
			ai:{
				threaten:1.5
			}
		},
		shenxian2:{},
		qiangwu:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			content:function(){
				"step 0"
				player.judge();
				"step 1"
				player.storage.qiangwu=result.number;
			},
			ai:{
				result:{
					player:1
				},
				order:11
			},
			mod:{
				targetInRange:function(card,player){
					if(_status.currentPhase==player&&card.name=='sha'&&card.number<player.storage.qiangwu) return true;
				},
				cardUsable:function(card,player){
					if(_status.currentPhase==player&&card.name=='sha'&&card.number>player.storage.qiangwu) return Infinity;
				}
			},
			group:['qiangwu2','qiangwu3']
		},
		qiangwu2:{
			trigger:{player:'phaseUseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				delete player.storage.qiangwu;
			}
		},
		qiangwu3:{
			trigger:{player:'useCard'},
			filter:function(event,player){
				if(_status.currentPhase==player&&event.card.name=='sha'&&
				event.card.number>player.storage.qiangwu) return true;
				return false;
			},
			forced:true,
			popup:false,
			content:function(){
				if(player.stat[player.stat.length-1].card.sha>0){
					player.stat[player.stat.length-1].card.sha--;
				}
			},
		},
		zhendu:{
			audio:2,
			trigger:{global:'phaseUseBegin'},
			filter:function(event,player){
				return event.player!=player&&player.num('h')>0;
			},
			direct:true,
			content:function(){
				"step 0"
				var nono=(Math.abs(ai.get.attitude(player,trigger.player))<3);
				if(ai.get.damageEffect(trigger.player,player,player)<=0){
					nono=true
				}
				else if(trigger.player.hp>2){
					nono=true;
				}
				else if(trigger.player.hp>1&&player.num('h')<3){
					nono=true;
				}
				else if(trigger.player.canUse('sha',player)&&!player.num('h','shan')&&trigger.player.num('h')>=3){
					nono=true;
				}
				var next=player.chooseToDiscard(get.prompt('zhendu',trigger.player));
				next.set('ai',function(card){
					if(_status.event.nono) return -1;
					return 7-ai.get.useful(card);
				});
				next.set('logSkill',['zhendu',trigger.player]);
				next.set('nono',nono);
				"step 1"
				if(result.bool){
					trigger.player.damage();
				}
				else{
					event.finish();
				}
				"step 2"
				trigger.player.useCard({name:'jiu'},trigger.player);
			},
			ai:{
				threaten:2,
				expose:0.3
			}
		},
		qiluan:{
			trigger:{source:'dieAfter'},
			forced:true,
			priority:-10,
			silent:true,
			popup:false,
			filter:function(event){
				return _status.currentPhase!=event.player;
			},
			content:function(){
				if(!player.storage.qiluan){
					player.storage.qiluan=1;
				}
				else{
					player.storage.qiluan++;
				}
			},
			group:['qiluan2','qiluan3']
		},
		qiluan2:{
			audio:2,
			trigger:{global:'phaseAfter'},
			forced:true,
			filter:function(event,player){
				return player.storage.qiluan?true:false;
			},
			content:function(){
				player.draw(3*player.storage.qiluan);
				player.storage.qiluan=0;
			}
		},
		qiluan3:{
			trigger:{source:'dieAfter'},
			forced:true,
			priority:-10,
			filter:function(event){
				return _status.currentPhase==event.player;
			},
			content:function(){
				var num=3;
				if(player.storage.qiluan){
					num+=3*player.storage.qiluan;
					player.storage.qiluan=0;
				}
				player.draw(num);
			},
		},
		shangyi:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.num('h');
			},
			content:function(){
				"step 0"
				player.chooseCardButton(target,target.get('h')).set('filterButton',function(button){
					return get.color(button.link)=='black';
				});
				"step 1"
				if(result.bool){
					target.discard(result.links[0]);
				}
			},
			ai:{
				order:11,
				result:{
					target:function(player,target){
						return -target.num('h');
					}
				},
				threaten:1.1
			},
		},
		shengxi:{
			trigger:{player:'phaseDiscardBegin'},
			frequent:true,
			filter:function(event,player){
				return !player.getStat('damage');
			},
			content:function(){
				player.draw(2);
			},
			audio:2,
			audioname:['liushan']
		},
		shoucheng:{
			trigger:{global:'loseEnd'},
			audio:2,
			check:function(event,player){
				return ai.get.attitude(player,event.player)>0;
			},
			filter:function(event,player){
				if(event.player.num('h')) return false;
				if(_status.currentPhase==event.player) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='h') return true;
				}
				return false;
			},
			content:function(){
				trigger.player.draw();
				player.line(trigger.player,'green');
			},
			ai:{
				threaten:1.3,
				expose:0.2,
				noh:true,
			}
		},
		hengzheng:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
			filter:function(event,player){
				return player.hp==1||player.num('h')==0;
			},
			check:function(event,player){
				var num=game.countPlayer(function(current){
					if(current.num('he')&&current!=player&&ai.get.attitude(player,current)<=0){
						return true;
					}
					if(current.num('j')&&current!=player&&ai.get.attitude(player,current)>0){
						return true;
					}
				});
				return num>=2;
			},
			content:function(){
				"step 0"
				var targets=game.filterPlayer();
				targets.remove(player);
				targets.sort(lib.sort.seat);
				event.targets=targets;
				event.num=0;
				trigger.untrigger();
				trigger.finish();
				player.line(targets,'green');
				"step 1"
				if(num<event.targets.length){
					if(event.targets[num].num('hej')){
						player.gainPlayerCard(event.targets[num],'hej',true);
					}
					event.num++;
					event.redo();
				}
			},
			ai:{
				threaten:function(player,target){
					if(target.hp==1) return 2.5;
					return 1;
				},
			}
		},
		yongjue:{
			audio:2,
			trigger:{global:'useCardEnd'},
			usable:1,
			filter:function(event,player){
				if(event.card.name!='sha') return false;
				if(event.player==player) return false;
				if(event.targets.contains(player)) return false;
				if(event.cards){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d') return true;
					}
				}
				return false;
			},
			frequent:true,
			content:function(){
				var cards=trigger.cards.slice(0);
				for(var i=0;i<cards.length;i++){
					if(get.position(cards[i])!='d'){
						cards.splice(i--,1);
					}
				}
				player.gain(cards,'gain2');
			},
		},
		guixiu:{
			audio:2,
			trigger:{target:'shaBegin'},
			frequent:true,
			filter:function(event,player){
				return player.num('h')<player.hp;
			},
			content:function(){
				player.draw();
			}
		},
		cunsi:{
			skillAnimation:true,
			audio:2,
			unique:true,
			enable:'phaseUse',
			mark:true,
			filter:function(event,player){
				return !player.storage.cunsi&&player.num('h')&&!player.isTurnedOver();
			},
			init:function(player){
				player.storage.cunsi=false;
			},
			filterTarget:function(card,player,target){
				return player!=target&&target.sex=='male';
			},
			content:function(){
				"step 0"
				player.awakenSkill('cunsi');
				var cards=player.get('h');
				target.gain(cards,player);
				player.$give(cards.length,target);
				player.storage.cunsi=true;
				game.delay();
				target.addSkill('yongjue');
				target.markSkillCharacter('yongjue',player,'存嗣','$<div><div class="skill">【勇决】</div><div>每当其他角色于回合内使用一张杀，若目标不是你，你可以获得之，每回合限一次</div></div>');
				"step 1"
				player.turnOver();
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:4,
				result:{
					target:function(player,target){
						if(target.isMin()) return 0;
						if(player.hp>1){
							if(game.phaseNumber<game.players.length) return 0;
							if(target.hp==1&&target.maxHp>2) return 0;
							if(ai.get.attitude(player,target)<5) return 0;
						}
						if(ai.get.attitude(player,target)<5) return 0;
						if(target.hp==1&&target.maxHp>2) return 0.2;
						if(target==game.me) return 1.2;
						return 1;
					}
				},
				expose:0.5,
				threaten:1.5
			}
		},
		fenming:{
			audio:2,
			trigger:{player:'phaseEnd'},
			check:function(event,player){
				var num=game.countPlayer(function(current){
					if(current.isLinked()&&current.num('he')){
						return ai.get.attitude(player,current);
					}
				});
				return num<0;
			},
			filter:function(event,player){
				return player.isLinked();
			},
			content:function(){
				"step 0"
				event.targets=game.filterPlayer(function(current){
					if(current.isLinked()&&current.num('he')){
						return true;
					}
				});
				event.num=0;
				event.targets.sort(lib.sort.seat);
				"step 1"
				if(event.num<event.targets.length){
					var target=event.targets[event.num];
					if(player==target){
						player.chooseToDiscard(true,'he');
					}
					else{
						player.discardPlayerCard(true,'he',target);
					}
					event.num++;
					event.redo();
				}
			}
		},
		duanxie:{
			enable:'phaseUse',
			usable:1,
			audio:2,
			filterTarget:function(card,player,target){
				return player!=target&&!target.isLinked();
			},
			content:function(){
				"step 0"
				if(!target.isLinked()) target.link();
				"step 1"
				if(!player.isLinked()) player.link();
			},
			ai:{
				result:{
					target:-1,
					player:function(player){
						return player.isLinked()?0:-0.8;
					}
				},
				order:2,
				expose:0.3,
				effect:{
					target:function(card){
						if(card.name=='tiesuo'){
							return 0.5;
						}
					}
				}
			}
		},
		xiaoguo:{
			audio:2,
			trigger:{global:'phaseEnd'},
			check:function(event,player){
				return ai.get.damageEffect(event.player,player,player)>0;
			},
			filter:function(event,player){
				return event.player.isAlive()&&event.player!=player&&player.num('h',{type:'basic'});
			},
			direct:true,
			content:function(){
				"step 0"
				var nono=(Math.abs(ai.get.attitude(player,trigger.player))<3);
				if(ai.get.damageEffect(trigger.player,player,player)<=0){
					nono=true;
				}
				var next=player.chooseToDiscard(get.prompt('xiaoguo',trigger.player),{type:'basic'});
				next.set('ai',function(card){
					if(_status.event.nono) return 0;
					return 8-ai.get.useful(card);
				});
				next.set('logSkill',['xiaoguo',trigger.player]);
				next.set('nono',nono);
				"step 1"
				if(result.bool){
					var nono=(ai.get.damageEffect(trigger.player,player,trigger.player)>=0);
					trigger.player.chooseToDiscard('he',{type:'equip'}).set('ai',function(card){
						if(_status.event.nono){
							return 0;
						}
						if(_status.event.player.hp==1) return 10-ai.get.value(card);
						return 9-ai.get.value(card);
					}).set('nono',nono);
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.draw();
				}
				else{
					trigger.player.damage();
				}
			},
			ai:{
				expose:0.3,
				threaten:1.3
			}
		},
		suishi:{
			trigger:{global:'dying'},
			forced:true,
			popup:false,
			priority:6,
			check:function(){
				return false;
			},
			filter:function(event,player){
				return event.player!=player&&event.parent.name=='damage'&&event.parent.source&&event.parent.source!=event.player;
			},
			content:function(){
				'step 0'
				var str;
				if(trigger.parent.source==player){
					str='随势：是否摸一张牌？';
				}
				else{
					str='随势：是否令'+get.translation(player)+'摸一张牌？'
				}
				trigger.parent.source.chooseBool(str).set('ai',function(){
					return ai.get.attitude(_status.event.player,_status.event.target)>0;
				}).set('target',player);
				'step 1'
				if(result.bool){
					player.logSkill('suishi');
					trigger.parent.source.line(player,'green');
					player.draw();
				}
			},
			group:'suishi2'
		},
		suishi2:{
			trigger:{global:'dieAfter'},
			forced:true,
			popup:false,
			check:function(){
				return false;
			},
			filter:function(event,player){
				return event.player!=player&&event.source&&event.source!=player&&event.source!=event.player;
			},
			content:function(){
				'step 0'
				var str;
				if(trigger.source==player){
					str='随势：是否流失一点体力？';
				}
				else{
					str='随势：是否令'+get.translation(player)+'流失一点体力？'
				}
				trigger.source.chooseBool(str).set('ai',function(){
					return ai.get.attitude(_status.event.player,_status.event.target)<0;
				}).set('target',player);
				'step 1'
				if(result.bool){
					player.logSkill('suishi');
					trigger.source.line(player,'green');
					player.loseHp();
				}
			},
		},
		sijian:{
			trigger:{player:'loseEnd'},
			direct:true,
			audio:2,
			filter:function(event,player){
				if(player.num('h')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='h') return true;
				}
				return false;
			},
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('sijian'),function(card,player,target){
					return player!=target&&target.num('he')>0;
				}).set('ai',function(target){
					return -ai.get.attitude(_status.event.player,target);
				});
				"step 1"
				if(result.bool){
					player.logSkill('sijian',result.targets);
					event.target=result.targets[0];
					player.discardPlayerCard(event.target,true);
				}
				else{
					event.finish();
				}
			},
			ai:{
				expose:0.2,
			}
		},
		quji:{
			enable:'phaseUse',
			usable:1,
			position:'he',
			filterCard:true,
			selectCard:function(){
				var player=_status.event.player;
				var num=game.countPlayer(function(current){
					return current.isDamaged();
				});
				return [1,Math.min(num,player.maxHp-player.hp)];
			},
			filterTarget:function(card,player,target){
				return target.hp<target.maxHp;
			},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			selectTarget:function(){
				return ui.selected.cards.length;
			},
			check:function(card){
				if(get.color(card)=='black') return -1;
				return 9-ai.get.value(card);
			},
			content:function(){
				"step 0"
				target.recover();
				"step 1"
				if(target==player){
					for(var i=0;i<cards.length;i++){
						if(get.color(cards[i])=='black'){
							player.loseHp();
							break;
						}
					}
				}
			},
			ai:{
				result:{
					target:1
				},
				order:6
			}
		},
		junbing2:{
			trigger:{player:'phaseEnd'},
			filter:function(event,player){
				if(player.num('h')>1) return false;
				return game.hasPlayer(function(current){
					return current.hasSkill('junbing');
				});
			},
			check:function(event,player){
				var target=game.findPlayer(function(current){
					return current.hasSkill('junbing');
				});
				if(target){
					var num=target.num('h');
					var att=ai.get.attitude(player,target);
					if(num==0) return true;
					if(num==1) return att>-1;
					if(num==2) return att>0;
					return att>1;
				}
				return false;
			},
			content:function(){
				"step 0"
				player.draw();
				if(player.hasSkill('junbing')){
					event.finish();
				}
				else{
					event.target=game.findPlayer(function(current){
						return current.hasSkill('junbing');
					});
				}
				"step 1"
				var cards=player.get('h');
				target.gain(cards,player);
				event.num=cards.length;
				player.$give(event.num,target);
				game.delay();
				"step 2"
				target.chooseCard('选择还给'+get.translation(player)+'的牌',true,event.num);
				game.delay(0.2);
				"step 3"
				player.gain(result.cards,target);
				target.$give(result.cards.length,player);
				game.delay();
			}
		},
		junbing:{
			global:'junbing2',
			unique:true,
			forceunique:true
		},
		xiongyi:{
			skillAnimation:true,
			unique:true,
			enable:'phaseUse',
			audio:2,
			mark:true,
			filter:function(event,player){
				return !player.storage.xiongyi;
			},
			init:function(player){
				player.storage.xiongyi=false;
			},
			filterTarget:function(card,player,target){
				if(get.mode()=='guozhan'){
					if(player.identity=='unknown'||player.identity=='ye') return player==target;
					return player.identity==target.identity;
				}
				else{
					return true;
				}
			},
			multitarget:true,
			multiline:true,
			selectTarget:function(){
				if(get.mode()=='guozhan') return -1;
				return [1,3];
			},
			content:function(){
				"step 0"
				player.storage.xiongyi=true;
				player.awakenSkill('xiongyi');
				game.asyncDraw(targets,3);
				"step 1"
				if(targets.length<=2){
					player.recover();
				}
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:1,
				result:{
					target:function(player){
						var num=player.num('h');
						if(player.hp==1) return 1;
						if(player.hp==2&&num<=2) return 1;
						if(player.hp==3&&num<=1) return 1;
						if(game.phaseNumber<game.players.length*2) return 0;
						if(player.hasUnknown()) return 0;
						return 1;
					},
				}
			}
		},
		shushen:{
			audio:2,
			trigger:{player:'recoverAfter'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('shushen'),function(card,player,target){
					return target!=player;
				}).set('ai',function(target){
					return ai.get.attitude(_status.event.player,target);
				});
				"step 1"
				if(result.bool){
					player.logSkill('shushen',result.targets);
					event.target=result.targets[0];
					if(event.target.hp==event.target.maxHp){
						event.target.draw(2);
						event.finish();
					}
					else{
						event.target.chooseControl('draw_card','recover_hp',function(event,target){
							if(target.hp>=2||target.hp>=target.maxHp-1) return 'draw_card';
							if(target.hp==2&&target.num('h')==0) return 'draw_card';
							return 'recover_hp';
						});
					}
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.control=='draw_card'){
					target.draw(2);
				}
				else{
					target.recover();
				}
			},
			ai:{
				threaten:0.8,
				expose:0.1
			}
		},
		shenzhi:{
			audio:2,
			trigger:{player:'phaseBegin'},
			check:function(event,player){
				if(player.hp>2) return false;
				var cards=player.get('h');
				if(cards.length<player.hp) return false;
				if(cards.length>3) return false;
				for(var i=0;i<cards.length;i++){
					if(ai.get.value(cards[i])>7||get.tag(cards[i],'recover')>=1) return false;
				}
				return true;
			},
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				"step 0"
				var cards=player.get('h');
				event.bool=cards.length>=player.hp;
				player.discard(cards);
				"step 1"
				if(event.bool){
					player.recover();
				}
			}
		},
		wuji:{
			skillAnimation:true,
			audio:2,
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.getStat('damage')>=3&&!player.storage.wuji;
			},
			content:function(){
				"step 0"
				player.removeSkill('huxiao');
				player.gainMaxHp();
				"step 1"
				player.recover();
				player.awakenSkill('wuji');
				player.storage.wuji=true;
			}
		},
		xueji:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filter:function(event,player){
				return player.hp<player.maxHp&&player.num('he',{color:'red'})>0;
			},
			filterTarget:function(card,player,target){
				return player!=target&&get.distance(player,target,'attack')<=1;
			},
			selectTarget:function(){
				return [1,_status.event.player.maxHp-_status.event.player.hp];
			},
			position:'he',
			filterCard:function(card){
				return get.color(card)=='red';
			},
			check:function(card){
				return 8-ai.get.useful(card);
			},
			content:function(){
				"step 0"
				target.damage();
				"step 1"
				target.draw();
			},
			ai:{
				order:7,
				result:{
					target:function(player,target){
						return ai.get.damageEffect(target,player);
					}
				},
				threaten:function(player,target){
					if(target.hp==1) return 2;
					if(target.hp==2) return 1.5;
					return 0.5;
				},
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(get.tag(card,'damage')){
							if(target.hp==target.maxHp&&target.hasFriend()) return [0,1];
						}
						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
					}
				}
			}
		},
		huxiao:{
			audio:2,
			trigger:{player:'shaMiss'},
			forced:true,
			content:function(){
				player.storage.huxiao++;
			},
			check:function(event,player){
				return player.num('h','sha')>0;
			},
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+player.storage.huxiao;
				}
			},
			group:'huxiao2'
		},
		huxiao2:{
			trigger:{player:'phaseUseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				player.storage.huxiao=0;
			},
		},
		aocai:{
			audio:2,
			trigger:{player:'chooseToRespondBegin'},
			frequent:true,
			filter:function(event,player){
				if(event.responded) return false;
				return _status.currentPhase!==player;
			},
			content:function(){
				"step 0"
				var cards=[];
				if(ui.cardPile.childNodes.length<2){
					var discardcards=get.cards(2);
					for(var i=0;i<discardcards.length;i++){
						ui.discardPile.appendChild(discardcards[i]);
					}
				}
				for(var i=0;i<2;i++){
					cards.push(ui.cardPile.childNodes[i]);
				}
				player.chooseCardButton('傲才：选择一张卡牌打出',cards).set('filterButton',function(button){
					return get.type(button.link)=='basic'&&_status.event.getTrigger().filterCard(button.link);
				});
				"step 1"
				if(result.bool){
					game.log(player,'傲才发动成功');
					trigger.untrigger();
					trigger.responded=true;
					result.links[0].remove();
					trigger.result={bool:true,card:result.links[0]}
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,effect){
						if(get.tag(card,'respondShan')) return 0.7;
						if(get.tag(card,'respondSha')) return 0.7;
					}
				}
			},
			group:'aocai2',
		},
		aocai2:{
			enable:'chooseToUse',
			filter:function(event,player){
				return _status.currentPhase!==player&&event.type!='wuxie'&&event.type!='trickuse';
			},
			onChooseToUse:function(event){
				if(!game.online){
					var cards=[];
					if(ui.cardPile.childNodes.length<2){
						var discardcards=get.cards(2);
						for(var i=0;i<discardcards.length;i++){
							ui.discardPile.appendChild(discardcards[i]);
						}
					}
					for(var i=0;i<2;i++){
						cards.push(ui.cardPile.childNodes[i]);
					}
					event.set('aocaicards',cards);
				}
			},
			chooseButton:{
				dialog:function(event,player){
					return ui.create.dialog('傲才：选择一张卡牌使用',event.aocaicards);
				},
				filter:function(button,player){
					var evt=_status.event.getParent();
					if(evt&&evt.filterCard){
						return get.type(button.link)=='basic'&&evt.filterCard(button.link,player,evt);
					}
					return false;
				},
				check:function(button){
					return 1;
				},
				backup:function(links,player){
					return {
						filterCard:function(){return false},
						selectCard:-1,
						viewAs:links[0],
					}
				},
				prompt:function(links,player){
					return '选择'+get.translation(links)+'的目标';
				}
			},
			ai:{
				order:11,
				save:true,
				result:{
					player:function(player){
						if(player.tempSkills.aocai4) return 0;
						if(_status.dying) return ai.get.attitude(player,_status.dying);
						return 1;
					}
				}
			}
		},
		hongyuan:{
			trigger:{player:'phaseDrawBegin'},
			direct:true,
			audio:2,
			content:function(){
				"step 0"
				var check;
				if(player.num('h')==0){
					check=false;
				}
				else{
					check=(game.countPlayer(function(current){
						return player!=current&&ai.get.attitude(player,current)>1;
					})>=2);
				}
				if(get.is.versus()){
					event.versus=true;
					player.chooseBool(get.prompt('hongyuan'));
				}
				else{
					player.chooseTarget(get.prompt('hongyuan'),[1,2],function(card,player,target){
						return player!=target;
					},function(target){
						if(!_status.event.check) return 0;
						return ai.get.attitude(_status.event.player,target);
					}).set('check',check);
				}
				"step 1"
				if(result.bool){
					var targets;
					if(event.versus){
						targets=game.filterPlayer(function(current){
							return current!=player&&current.side==player.side;
						});
					}
					else{
						targets=result.targets;
					}
					player.logSkill('hongyuan',targets);
					game.asyncDraw(targets);
					trigger.num--;
				}
			},
		},
		huanshi:{
			audio:2,
			trigger:{global:'judge'},
			filter:function(event,player){
				return player.num('he')>0;
			},
			logTarget:'player',
			check:function(event,player){
				if(ai.get.attitude(player,event.player)<=0) return false;
				var cards=player.get('he');
				var judge=event.judge(event.player.judging[0]);
				for(var i=0;i<cards.length;i++){
					var judge2=event.judge(cards[i]);
					if(_status.currentPhase!=player&&judge2==judge&&get.color(cards[i])=='red'&&ai.get.useful(cards[i])<5) return true;
					if(judge2>judge) return true;
				}
				return false;
			},
			content:function(){
				"step 0"
				var target=trigger.player;
				player.line(target,'green');
				var judge=trigger.judge(target.judging[0]);
				var attitude=ai.get.attitude(target,player);
				target.choosePlayerCard('请选择代替判定的牌','he','visible',true,player).set('ai',function(button){
					var card=button.link;
					var judge=_status.event.judge;
					var attitude=_status.event.attitude;
					var result=trigger.judge(card)-judge;
					var player=_status.event.player;
					if(result>0){
						return 20+result;
					}
					if(result==0){
						if(_status.currentPhase==player) return 0;
						if(attitude>=0){
							return get.color(card)=='red'?7:0-ai.get.value(card);
						}
						else{
							return get.color(card)=='black'?10:0+ai.get.value(card);
						}
					}
					if(attitude>=0){
						return get.color(card)=='red'?0:-10+result;
					}
					else{
						return get.color(card)=='black'?0:-10+result;
					}
				}).set('judge',judge).set('attitude',attitude);
				"step 1"
				if(result.bool){
					event.card=result.links[0];
					player.respond(event.card,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					if(trigger.player.judging[0].clone){
						trigger.player.judging[0].clone.classList.remove('thrownhighlight');
						game.broadcast(function(card){
							if(card.clone){
								card.clone.classList.remove('thrownhighlight');
							}
						},trigger.player.judging[0]);
						game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
					}
					ui.discardPile.appendChild(trigger.player.judging[0]);
					trigger.player.judging[0]=event.card;
					if(!get.owner(event.card,'judge')){
						trigger.position.appendChild(event.card);
					}
					game.log(trigger.player,'的判定牌改为',event.card);
					game.delay(2);
				}
			},
			ai:{
				tag:{
					rejudge:1,
				}
			}
		},
		mingzhe:{
			audio:2,
			trigger:{player:['useCardAfter','respondAfter','discardAfter']},
			frequent:true,
			filter:function(event,player){
				if(player==_status.currentPhase) return false;
				if(event.cards){
					for(var i=0;i<event.cards.length;i++){
						if(get.color(event.cards[i])=='red'&&
						event.cards[i].original!='j') return true;
					}
				}
				return false;
			},
			content:function(){
				player.draw();
			},
			ai:{
				threaten:0.7
			}
		},
		duwu:{
			audio:2,
			enable:'phaseUse',
			filter:function(event,player){
				return player.hasSkill('duwu2')==false;
			},
			filterCard:function(){
				if(ui.selected.targets.length) return false;
				return true;
			},
			position:'he',
			selectCard:[1,Infinity],
			complexSelect:true,
			complexCard:true,
			filterTarget:function(card,player,target){
				return target!=player&&get.distance(player,target,'attack')<=1&&ui.selected.cards.length==target.hp;
			},
			check:function(card){
				switch(ui.selected.cards.length){
					case 0:return 7-ai.get.value(card);
					case 1:return 6-ai.get.value(card);
					case 2:return 3-ai.get.value(card);
					default:return 0;
				}
			},
			content:function(){
				"step 0"
				target.damage();
				if(target.hp>1){
					event.finish();
				}
				"step 1"
				player.addSkill('duwu2');
				player.loseHp();
			},
			ai:{
				order:2,
				result:{
					target:function(player,target){
						return ai.get.damageEffect(target,player);
					}
				},
				threaten:1.5,
				expose:0.3
			}
		},
		duwu2:{
			trigger:{player:'phaseBegin'},
			forced:true,
			popup:false,
			audio:false,
			content:function(){
				player.removeSkill('duwu2');
			}
		},
		yicong:{
			mod:{
				globalFrom:function(from,to,current){
					if(from.hp>2) return current-1;
				},
				globalTo:function(from,to,current){
					if(to.hp<=2) return current+1;
				},
			},
			ai:{
				threaten:0.8
			}
		},
		yongsi:{
			group:['yongsi1','yongsi2'],
			ai:{
				threaten:2.2
			}
		},
		yongsi1:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				trigger.num+=num;
			}
		},
		yongsi2:{
			audio:2,
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				player.chooseToDiscard(num,'he',true);
			}
		},
		bifa:{
			trigger:{player:'phaseEnd'},
			direct:true,
			audio:2,
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				"step 0"
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].storage.bifa){
						players[i].addSkill('bifa2');
					}
				}
				player.chooseCardTarget({
					filterCard:true,
					filterTarget:function(card,player,target){
						return player!=target&&!target.storage.bifa;
					},
					ai1:function(card){
						return 7-ai.get.value(card);
					},
					ai2:function(target){
						var num=target.hasSkillTag('maixie')?2:0;
						return -ai.get.attitude(_status.event.player,target)-num;
					},
					prompt:get.prompt('bifa')
				});
				"step 1"
				if(result.bool){
					player.logSkill('bifa',result.targets[0]);
					result.targets[0].addSkill('bifa2');
					result.targets[0].storage.bifa=[result.cards[0],player];
					player.lose(result.cards[0],result.targets[0].node.special);
					player.$give(1,result.targets[0]);
				}
			},
			ai:{
				threaten:1.7,
				expose:0.3
			}
		},
		bifa2:{
			trigger:{player:'phaseBegin'},
			forced:true,
			mark:true,
			audio:false,
			content:function(){
				"step 0"
				if(player.storage.bifa[1].isAlive()&&player.num('h')){
					player.chooseCard(get.translation(player.storage.bifa[1])+
						'的笔伐牌为'+get.translation(player.storage.bifa[0]),function(card){
						return get.type(card,'trick')==_status.event.type;
					}).set('ai',function(card){
						return 8-ai.get.value(card);
					}).set('type',get.type(player.storage.bifa[0],'trick'));
				}
				else{
					event.directfalse=true;
				}
				"step 1"
				if(result.bool&&!event.directfalse){
					player.storage.bifa[1].gain(result.cards,player);
					player.$give(result.cards,player.storage.bifa[1]);
					player.gain(player.storage.bifa[0],'draw2','log');
				}
				else{
					ui.discardPile.appendChild(player.storage.bifa[0]);
					game.log(player.storage.bifa[0],'进入弃牌堆');
					player.$throw(player.storage.bifa[0],1000);
					player.loseHp();
				}
				player.removeSkill('bifa2');
				delete player.storage.bifa;
			},
			intro:{
				name:'笔伐',
				content:'已成为笔伐目标'
			}
		},
		songci:{
			audio:2,
			enable:'phaseUse',
			filter:function(){
				return game.hasPlayer(function(current){
					return !current.storage.songci;
				});
			},
			init:function(player){
				player.storage.songci=false;
			},
			filterTarget:function(card,player,target){
				return (!target.storage.songci&&target.num('h')!=target.hp);
			},
			content:function(){
				if(target.num('h')>target.hp){
					target.chooseToDiscard(2,'he',true);
				}
				else{
					target.draw(2);
				}
				target.storage.songci=true;
				target.markSkill('songci');
			},
			intro:{
				content:'已发动'
			},
			ai:{
				order:7,
				threaten:1.5,
				expose:0.2,
				result:{
					target:function(player,target){
						if(target.num('h')<target.hp){
							if(target.num('h')<=2) return 1;
						}
						else if(target.num('h')>target.hp){
							if(target.num('h')<=3) return -1;
						}
					}
				}
			}
		},
		baobian:{
			trigger:{player:['phaseBefore','changeHp']},
			forced:true,
			popup:false,
			unique:true,
			content:function(){
				player.removeAdditionalSkill('baobian');
				var list=[];
				if(player.hp<=3){
					list.push('tiaoxin');
				}
				if(player.hp<=2){
					list.push('paoxiao');
				}
				if(player.hp<=1){
					list.push('xinshensu');
				}
				if(list.length){
					player.addAdditionalSkill('baobian',list);
				}
			},
			ai:{
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(get.tag(card,'damage')){
							if(!target.hasFriend()) return;
							if(target.hp>=4) return [0,1];
						}
						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
					}
				}
			}
		},
		chongzhen:{
			group:['chongzhen1','chongzhen2'],
			ai:{
				mingzhi:false,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'respondShan')||get.tag(card,'respondSha')){
							if(ai.get.attitude(target,player)<=0){
								if(current>0) return;
								if(target.num('h')==0) return 1.6;
								if(target.num('h')==1) return 1.2;
								if(target.num('h')==2) return [0.8,0.2,0,-0.2];
								return [0.4,0.7,0,-0.7];
							}
						}
					},
				},
			}
		},
		chongzhen1:{
			audio:2,
			trigger:{player:'shaBefore'},
			filter:function(event,player){
				if(event.skill!='longdan_sha'&&event.skill!='fanghun_sha') return false;
				return event.target.num('h')>0;
			},
			logTarget:'target',
			content:function(){
				var card=trigger.target.get('h').randomGet();
				player.gain(card,trigger.target);
				trigger.target.$giveAuto(card,player);
				game.delay();
			}
		},
		chongzhen2:{
			audio:2,
			trigger:{player:'respond'},
			filter:function(event,player){
				if(event.skill!='longdan_shan'&&event.skill!='longdan_sha'&&
				event.skill!='fanghun_shan'&&event.skill!='fanghun_sha') return false;
				return event.source&&event.source.num('h')>0;
			},
			logTarget:'source',
			content:function(){
				var card=trigger.source.get('h').randomGet();
				player.gain(card,trigger.source);
				trigger.source.$giveAuto(card,player);
				game.delay();
			}
		},
		lihun:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.sex=='male';
			},
			filterCard:true,
			position:'he',
			content:function(){
				player.gain(target.get('h'),target);
				target.$give(target.num('h'),player);
				player.turnOver();
				player.addSkill('lihun2');
				player.storage.lihun=target;
			},
			check:function(card){return 8-ai.get.value(card)},
			ai:{
				order:10,
				result:{
					player:function(player){
						if(player.classList.contains('turnedover')) return 10;
						return 0;
					},
					target:function(player,target){
						if(target.num('h')>target.hp) return target.hp-target.num('h');
						return 0;
					}
				},
				threaten:1.5,
				effect:{
					target:function(card){
						if(card.name=='guiyoujie') return [0,2];
					}
				}
			},
		},
		lihun2:{
			trigger:{player:'phaseUseEnd'},
			forced:true,
			popup:false,
			audio:false,
			content:function(){
				"step 0"
				player.removeSkill('lihun2');
				if(player.storage.lihun.classList.contains('dead')){
					event.finish();
				}
				else{
					player.chooseCard('he',true,player.storage.lihun.hp);
				}
				"step 1"
				player.storage.lihun.gain(result.cards,player);
				player.$give(result.cards.length,player.storage.lihun);
			}
		},
		yuanhu:{
			audio:3,
			trigger:{player:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				return player.num('he',{type:'equip'})>0;
			},
			content:function(){
				"step 0"
				player.chooseCardTarget({
					filterCard:function(card){
						return get.type(card)=='equip';
					},
					position:'he',
					filterTarget:function(card,player,target){
						return !target.get('e',get.subtype(card)[5]);
					},
					ai1:function(card){
						return 6-ai.get.value(card);
					},
					ai2:function(target){
						return ai.get.attitude(_status.event.player,target)-3;
					},
					prompt:get.prompt('yuanhu')
				});
				"step 1"
				if(result.bool){
					player.logSkill('yuanhu',result.targets);
					var thisTarget=result.targets[0];
					var thisCard=result.cards[0];
					thisTarget.equip(thisCard);
					event.target=thisTarget;
					if(thisTarget!=player){
						player.$give(thisCard,thisTarget);
					}
					switch(get.subtype(thisCard)){
						case 'equip1':{
							if(!game.hasPlayer(function(current){
								return get.distance(thisTarget,current)<=1;
							})){
								event.finish();
								return;
							}
							game.delay();
							player.chooseTarget(true,function(card,player,target){
								return get.distance(_status.event.thisTarget,target)<=1&&target.num('hej');
							}).set('ai',function(target){
								var attitude=ai.get.attitude(_status.event.player,target);
								if(attitude>0&&target.num('j')){
									return attitude*1.5;
								}
								return -attitude;
							}).set('thisTarget',thisTarget);
							return;
						}
						case 'equip2':{
							thisTarget.draw();event.finish();
							return;
						}
						default:{
							thisTarget.recover();
							event.finish();
							return;
						}
					}
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.targets.length){
					player.discardPlayerCard(true,result.targets[0],'hej');
				}
			},
			ai:{
				threaten:1.2
			}
		},
		tianming:{
			audio:2,
			trigger:{target:'shaBegin'},
			check:function(event,player){
				var cards=player.get('h');
				if(cards.length<=2){
					for(var i=0;i<cards.length;i++){
						if(cards[i].name=='shan'||cards[i].name=='tao') return false;
					}
				}
				return true;
			},
			content:function(){
				"step 0"
				player.chooseToDiscard(2,true,'he');
				player.draw(2);
				var players=game.filterPlayer();
				players.sort(function(a,b){
					return b.hp-a.hp;
				});
				if(players[0].hp>players[1].hp&&players[0]!=player){
					players[0].chooseBool(get.prompt('tianming'));
					event.player=players[0];
				}
				else{
					event.finish();
				}
				"step 1"
				if(result.bool){
					player.chooseToDiscard(2,true,'he');
					player.draw(2);
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(card.name=='sha') return [1,0.5];
					}
				}
			}
		},
		mizhao:{
			enable:'phaseUse',
			usable:1,
			audio:2,
			filter:function(event,player){
				return player.num('h')>0;
			},
			filterCard:true,
			selectCard:-1,
			filterTarget:function(card,player,target){
				return player!=target;
			},
			discard:false,
			prepare:'give2',
			ai:{
				order:1,
				result:{
					player:0,
					target:function(player,target){
						if(player.num('h')>1){
							return 1;
						}
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].num('h')&&players[i]!=target&&players[i]!=player&&ai.get.attitude(player,players[i])<0){
								break;
							}
						}
						if(i==players.length){
							return 1;
						}
						return -2/(target.num('h')+1);
					}
				}
			},
			content:function(){
				"step 0"
				event.target1=targets[0];
				targets[0].gain(cards,player);
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].num('h')&&players[i]!=event.target1&&players[i]!=player){
						break;
					}
				}
				if(i==players.length){
					event.finish();
				}
				"step 1"
				player.chooseTarget(true,'选择拼点目标',function(card,player,target){
					return target.num('h')&&target!=_status.event.target1&&target!=player;
				}).set('ai',function(target){
					var player=_status.event.player;
					var eff=ai.get.effect(target,{name:'sha'},_status.event.target1,player);
					var att=ai.get.attitude(player,target);
					if(att>0){
						return eff-10;
					}
					return eff;
				}).set('target1',event.target1);
				"step 2"
				if(result.targets.length){
					event.target2=result.targets[0];
					event.target1.line(event.target2);
					event.target1.chooseToCompare(event.target2);
				}
				else{
					event.finish();
				}
				"step 3"
				if(result.bool){
					event.target1.useCard({name:'sha'},event.target2);
				}
				else{
					event.target2.useCard({name:'sha'},event.target1);
				}
			}
		},
		gongao:{
			audio:2,
			trigger:{global:'dieAfter'},
			forced:true,
			unique:true,
			content:function(){
				player.gainMaxHp();
				player.recover();
			},
			ai:{
				threaten:1.5
			}
		},
		juyi:{
			skillAnimation:true,
			audio:true,
			trigger:{player:'phaseBegin'},
			filter:function(event,player){
				return player.maxHp>game.players.length&&player.hp<player.maxHp&&!player.storage.juyi;
			},
			forced:true,
			unique:true,
			content:function(){
				var num=player.maxHp-player.num('h');
				if(num>0){
					player.draw(num);
				}
				player.addSkill('benghuai');
				player.addSkill('weizhong');
				player.storage.juyi=true;
				player.awakenSkill('juyi');
			}
		},
		weizhong:{
			audio:true,
			trigger:{player:['gainMaxHpEnd','loseMaxHpEnd']},
			forced:true,
			content:function(){
				player.draw();
			}
		},
		chixin:{
			group:['chixin1','chixin2'],
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha'){
						return num+20;
					}
				},
			},
			trigger:{player:'shaBefore'},
			forced:true,
			popup:false,
			check:function(event,player){
				return player.num('h','sha')>0;
			},
			filter:function(event,player){
				return _status.currentPhase==player;
			},
			content:function(){
				var target=trigger.target;
				if(target.hasSkill('chixin3')){
					target.storage.chixin++;
				}
				else{
					target.storage.chixin=1;
					target.addTempSkill('chixin3','phaseUseEnd');
				}
			}
		},
		chixin1:{
			enable:['chooseToRespond','chooseToUse'],
			filterCard:{suit:'diamond'},
			position:'he',
			viewAs:{name:'sha'},
			prompt:'将一张♦牌当杀使用或打出',
			check:function(card){return 5-ai.get.value(card)},
			ai:{
				respondSha:true,
			}
		},
		chixin2:{
			enable:['chooseToRespond'],
			filterCard:{suit:'diamond'},
			viewAs:{name:'shan'},
			position:'he',
			prompt:'将一张♦牌当闪打出',
			check:function(card){return 5-ai.get.value(card)},
			ai:{
				respondShan:true,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'respondShan')&&current<0) return 0.8
					}
				},
			}
		},
		chixin3:{
			mod:{
				targetEnabled:function(card,player,target){
					if(card.name!='sha') return;
					if(player==_status.currentPhase&&player.get('s').contains('chixin')){
						var num=game.checkMod(card,player,1,'cardUsable',player.get('s'))-20;
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hasSkill('chixin3')){
								num+=1-players[i].storage.chixin;
							}
						}
						return num>1;
					}
				}
			}
		},
		suiren:{
			trigger:{player:'phaseBegin'},
			skillAnimation:true,
			check:function(event,player){
				return player.hp==1||(player.hp==2&&player.num('h')<=1);
			},
			filter:function(event,player){
				return !player.storage.suiren;
			},
			intro:{
				content:'limited',
			},
			mark:true,
			direct:true,
			unique:true,
			content:function(){
				"step 0"
				var check=(player.hp==1||(player.hp==2&&player.num('h')<=1));
				player.chooseTarget(get.prompt('suiren')).set('ai',function(target){
					if(!_status.event.check) return 0;
					return ai.get.attitude(_status.event.player,target);
				}).set('check',check);
				"step 1"
				if(result.bool){
					player.storage.suiren=true;
					player.awakenSkill('suiren');
					player.logSkill('suiren',result.targets);
					player.removeSkill('yicong');
					player.gainMaxHp();
					player.recover();
					result.targets[0].draw(3);
				}
			}
		},
		kuangfu:{
			trigger:{source:'damageEnd'},
			direct:true,
			audio:2,
			filter:function(event){
				return event.card&&event.card.name=='sha'&&event.player.num('e');
			},
			content:function(){
				"step 0"
				var neg=ai.get.attitude(player,trigger.player)<=0;
				player.choosePlayerCard('e',trigger.player).set('ai',function(button){
					if(_status.event.neg){
						return ai.get.buttonValue(button);
					}
					return 0;
				}).set('neg',neg);
				"step 1"
				if(result.bool){
					player.logSkill('kuangfu');
					trigger.player.$give(result.links,player);
					game.delay(2);
					player.equip(result.links[0]);
				}
			}
		},
	},
	translate:{
		litong:'李通',
		mizhu:'糜竺',
		buzhi:'步骘',
		chenlin:'陈琳',
		yuanshu:'袁术',
		re_yuanshu:'新袁术',
		gongsunzan:'公孙瓒',
		sp_diaochan:'sp貂蝉',
		yangxiu:'杨修',
		sp_zhaoyun:'sp赵云',
		jsp_zhaoyun:'界sp赵云',
		caohong:'曹洪',
		liuxie:'刘协',
		xiahouba:'夏侯霸',
		zhugejin:'诸葛谨',
		zhugeke:'诸葛恪',
		guanyinping:'关银屏',
		ganfuren:'甘夫人',
		sunhao:'孙皓',
		chengyu:'程昱',
		simalang:'司马朗',
		zhangliang:'张梁',
		tianfeng:'田丰',
		sp_pangtong:'sp庞统',
		sp_jiaxu:'sp贾诩',
		maliang:'马良',
		sp_caoren:'sp曹仁',
		yuejin:'乐进',
		mifuren:'糜夫人',
		sp_dongzhuo:'sp董卓',
		chendong:'陈武董袭',
		jiangfei:'蒋琬费祎',
		jiangqing:'蒋钦',
		hetaihou:'何太后',
		dingfeng:'丁奉',
		zhangxingcai:'张星彩',
		caoang:'曹昂',
		kongrong:'孔融',
		fuwan:'伏完',
		sp_pangde:'sp庞德',
		sp_sunshangxiang:'孙尚香',
		zhugedan:'诸葛诞',
		sp_machao:'sp马超',
		sp_jiangwei:'sp姜维',
		zhangbao:'张宝',
		yangxiou:'杨修',
		shixie:'士燮',
		mayunlu:'马云騄',
		zhanglu:'张鲁',
		wutugu:'兀突骨',
		mateng:'马腾',
		sp_caiwenji:'sp蔡文姬',
		zhugeguo:'诸葛果',
		liuzan:'留赞',
		lingcao:'凌操',
		sunru:'孙茹',
		lingju:'灵雎',
		lifeng:'李丰',
		jsp_guanyu:'sp关羽',
		zhuling:'朱灵',
		sunluyu:'孙鲁育',
		hanba:'旱魃',
		panfeng:'潘凤',
		zumao:'祖茂',
		daxiaoqiao:'大小乔',
		sp_daqiao:'sp大乔',
		sp_ganning:'sp甘宁',
		sp_zhangfei:'sp张飞',
		sp_xiahoudun:'sp夏侯惇',
		cuiyan:'崔琰',
		wenpin:'文聘',
		jsp_huangyueying:'sp黄月英',
		sp_lvmeng:'sp吕蒙',
		wangji:'王基',
		guansuo:'关索',
		tadun:'蹋顿',
		yanbaihu:'严白虎',
		wanglang:'王朗',
		sp_liubei:'sp刘备',
		caochun:'曹纯',
		dongbai:'董白',
		zhaoxiang:'赵襄',
		heqi:'贺齐',
		kanze:'阚泽',
		dongyun:'董允',
		mazhong:'马忠',

		bingzheng:'秉正',
		bingzheng_info:'出牌阶段结束时，你可以令手牌数不等于体力值的一名角色弃置一张手牌或摸一张牌。然后若其手牌数等于体力值，你摸一张牌，且可以交给该角色一张牌',
		sheyan:'舍宴',
		sheyan_info:'当你成为一张普通锦囊牌的目标时（带有指向目标的锦囊除外），你可以令一名其他角色也成为此牌的目标',
		fuman:'抚蛮',
		fuman2:'抚蛮',
		fuman_info:'出牌阶段，你可以将一张【杀】交给一名本回合未获得过“抚蛮”牌的其他角色，然后其于下个回合结束之前使用“抚蛮”牌时，你摸一张牌',
		qizhou:'绮胄',
		qizhou_info:'锁定技，你根据装备区里牌的花色数获得以下技能：1种或以上-马术；2种或以上-英姿；3种或以上-短兵；4种-奋威',
		shanxi:'闪袭',
		shanxi_info:'出牌阶段限一次，你可以弃置一张红色基本牌，然后弃置攻击范围内的一名其他角色的一张牌，若弃置的牌是【闪】，你观看其手牌，若弃置的不是【闪】，其观看你的手牌',
		duanbing:'短兵',
		duanbing_info:'你使用【杀】可以多选择一名距离为1的角色为目标',
		fanghun:'芳魂',
		fanghun_info:'当你使用【杀】造成伤害后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动“龙胆”并摸一张牌',
		fuhan:'扶汉',
		fuhan_info:'限定技，回合开始时，你可以移去所有“梅影”标记，随机观看五名未登场的蜀势力角色，将武将牌替换为其中一名角色，并将体力上限数调整为本局游戏中移去“梅影”标记的数量（至多为游戏开始时的角色数），然后若你是体力值最低的角色，你回复1点体力',
		yjixi:'觊玺',
		yjixi_info:'觉醒技，结束阶段，若你连续三回合没有失去过体力，则你增加1点体力上限并回复1点体力，然后选择一项：获得技能“妄尊”或摸两张牌并获得当前主公的主公技',
		xinyongsi:'庸肆',
		xinyongsi1:'庸肆',
		xinyongsi2:'庸肆',
		xinyongsi_info:'锁定技，摸牌阶段，你令额定摸牌数为X(X为势力数);弃牌阶段开始时，你选择一项：1.弃置一张牌;2.失去1点体力',
		xiehui:'黠慧',
		xiehui2:'黠慧',
		xiehui_info:'锁定技，你的黑色牌不占用手牌上限；其他角色获得你的黑色牌时，其不能使用、打出、弃置这些牌直到其体力值减少为止',
		lianzhu:'连诛',
		lianzhu_info:'出牌阶段限一次，你可以展示并交给一名其他角色一张牌，若该牌为黑色，其选择一项：1.你摸两张牌；2.弃置两张牌',
		zhaolie:'昭烈',
		zhaolie_info:'摸牌阶段摸牌时，你可以少摸一张，指定你攻击范围内的一名角色亮出牌堆顶上3张牌，将其中的非基本牌和【桃】置于弃牌堆，该角色进行二选一：你对其造成X点伤害，然后他获得这些基本牌；或他弃置X张牌，然后你获得这些基本牌。（X为其中非基本牌的数量）',
		shichou:'誓仇',
		shichou2:'誓仇',
		shichou_info:'主公技，限定技，准备阶段，你可指定一名蜀国角色并交给其两张牌。本盘游戏中，每当你受到伤害时，改为该角色替你受到等量的伤害，然后摸等量的牌，直至该角色第一次进入濒死状态',
		shanjia:'缮甲',
		shanjia_info:'出牌阶段开始时，你可以先摸X张牌再弃置等量的牌，若你以此法弃置了装备区内的牌，视为你使用了一张无视距离的【杀】（X为你于本局游戏内使用过的装备牌数且最大为7）',
		tuifeng:'推锋',
		tuifeng2:'推锋',
		tuifeng_info:'1.当你受到1点伤害后，你可以将一张牌置于武将牌上，称为“锋”。2.准备阶段开始时，若你的武将牌上有“锋”，你移去所有“锋”，摸2X张牌，然后你于此回合的出牌阶段内使用【杀】的次数上限+X（X为你此次移去的“锋”数）',
		ziyuan:'资援',
		ziyuan_info:'出牌阶段限一次，你可以将任意张点数之和为13的手牌交给一名其他角色，然后该角色回复1点体力',
		jugu:'巨贾',
		jugu_info:'锁定技，1.你的手牌上限+X。2.游戏开始时，你摸X张牌（X为你的体力上限）',
		hongde:'弘德',
		hongde_info:'当你一次获得或失去至少两张牌后，你可以令一名其他角色摸一张牌',
		dingpan:'定叛',
		dingpan_info:'出牌阶段限X次，你可以令一名装备区里有牌的角色摸一张牌，然后其选择一项：1.令你弃置其装备区里的一张牌；2.获得其装备区里的所有牌，若如此做，你对其造成1点伤害（X为场上存活的反贼数，非身份模式改为1）',
		weidi:'伪帝',
		weidi_info:'锁定技，你视为拥有当前主公的主公技',
		juesi:'决死',
		juesi_info:'出牌阶段，你可以弃置一张杀并选择你攻击范围内的一名有牌的其他角色，该角色弃置一张牌，然后若弃置的牌不是杀且你的体力值不大于该角色，你视为对其使用决斗',
		zhenlue:'缜略',
		zhenlue_info:'锁定技，你使用的普通锦囊牌不能被无懈可击响应；你不能成为其他角色的延时类锦囊的目标',
		jianshu:'间书',
		jianshu_info:'限定技，出牌阶段，你可以将一张黑色手牌交给一名其他角色，并选择一名攻击范围内含有其的另一名其他角色，然后令这两名角色拼点，赢的角色弃置两张牌，没赢的角色失去一点体力',
		yongdi:'拥嫡',
		yongdi_info:'限定技，当你受到伤害后，你可令一名其他男性角色增加一点体力上限，然后若该角色的武将牌上有主公技且其不为主公，其获得此主公技',
		gushe:'鼓舌',
		gushe_bg:'舌',
		gushe_info:'出牌阶段限一次，你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，若你赢，对方选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶舌”标记（你有7个饶舌标记时，你死亡）',
		jici:'激词',
		jici_info:'当你发动“鼓舌”拼点的牌亮出后，若点数小于X，你可令点数+X；若点数等于X，你可令你本回合发动“鼓舌”的次数上限+1（X为你“饶舌”标记的数量）',
		shefu:'设伏',
		shefu_bg:'伏',
		shefu_info:'结束阶段开始时，你可以将一张手牌移出游戏，称为"伏兵"。然后为"伏兵"记录一个基本牌或锦囊牌名称（须与其他"伏兵"记录的名称均不同）。你的回合外，当有其他角色使用与你记录的"伏兵"牌名相同的牌时，你可以令此牌无效，然后移去该"伏兵"',
		benyu:'贲育',
		benyu2:'贲育',
		benyu_info:'每当你受到伤害后，若你的手牌数不大于伤害来源手牌数，你可以将手牌摸至与伤害来源手牌数相同（最多摸至5张）；否则你可以弃置大于伤害来源手牌数的手牌，然后对其造成1点伤害',
		zhidao:'雉盗',
		zhidao_info:'锁定技，当你于你的回合内第一次对区域里有牌的其他角色造成伤害后，你获得其手牌、装备区和判定区里的各一张牌，然后直到回合结束，其他角色不能被选择为你使用牌的目标',
		jili:'寄篱',
		jili_info:'锁定技，当一名其他角色成为红色基本牌或红色普通锦囊牌的目标时，若其与你的距离为1且你既不是此牌的使用者也不是目标，你也成为此牌的目标',
		luanzhan:'乱战',
		luanzhan_info:'你使用【杀】或黑色普通锦囊牌可以额外选择X名角色为目标；当你使用【杀】或黑色普通锦囊牌指定目标后，若此牌的目标角色数小于X，则X减至0。（X为你于本局游戏内造成过伤害的次数）',
		zhengnan:'征南',
		zhengnan_info:'当其他角色死亡后，你可以摸三张牌。若如此做，你获得下列技能中的任意一个：“武圣”、 “当先”和“制蛮”',
		xiefang:'撷芳',
		xiefang_info:'锁定技，你的进攻距离+X（X为女性角色数）',
		qizhi:'奇制',
		qizhi_info:'当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色的一张牌。若如此做，其摸一张牌',
		jinqu:'进趋',
		jinqu_info:'结束阶段开始时，你可以摸两张牌，若如此做，你将手牌弃置至X张（X为你于此回合发动过“奇制”的次数）',
		tanhu:'探虎',
		tanhu2:'探虎',
		tanhu3:'探虎',
		tanhu_info:'出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你获得以下技能直到回合结束：你与该角色的距离为1，你对该角色使用普通锦囊牌时可以摸一张牌',
		mouduan:'谋断',
		mouduan_info:'通常状态下，你拥有标记“武”并拥有技能“激昂”和“谦逊”。当你的手牌数为2张或以下时，你须将你的标记翻面为“文”，将该两项技能转化为“英姿”和“克己”。任一角色的回合开始前，你可弃一张牌将标记翻回',
		jiqiao:'机巧',
		jiqiao_info:'出牌阶段开始时，你可以弃置任意张装备牌，然后亮出牌堆顶三倍数量的牌，你获得其中的锦囊牌',
		linglong:'玲珑',
		linglong_info:'锁定技，若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1；若你的装备区没有宝物牌，你使用锦囊牌无距离限制',
		fenyong:'愤勇',
		fenyong2:'愤勇',
		fenyong2_bg:'勇',
		fenyong_info:'每当你受到一次伤害后，你可以获得一枚愤勇标记；当你有愤勇标记时，防止你受到的所有伤害',
		xuehen:'雪恨',
		xuehen_info:'每个角色的结束阶段开始时，若你有愤勇标记，你须弃置之，然后选择一项：1.弃置当前回合角色X张牌（X为你已损失的体力值）；2.视为对一名任意角色使用一张【杀】',
		zhenwei:'镇卫',
		zhenwei2:'镇卫',
		zhenwei_info:'当一名其他角色成为【杀】或黑色锦囊牌的目标时（使用者不是你），若该角色的体力值小于你且此牌的目标角色数为1，你可以弃置一张牌。若如此做，你选择一项：1、摸一张牌，然后将此【杀】或黑色锦囊牌转移给你；2、令此【杀】或黑色锦囊牌无效，然后将此【杀】或黑色锦囊牌置于使用者的武将牌旁，若如此做，当前回合结束后，使用者获得使用者武将牌旁的这些牌',
		jie:'嫉恶',
		jie_info:'锁定技，你使用的红色【杀】造成的伤害+1',
		dahe:'大喝',
		dahe2:'大喝',
		dahe2_bg:'喝',
		dahe_info:'出牌阶段，你可以与一名其他角色拼点。若你赢，该角色的非红心【闪】无效直到回合结束，你可将该角色拼点的牌交给场上一名体力不多于你的角色。若你没赢，你须展示手牌并选择一张弃置。每阶段限一次',
		yinling:'银铃',
		yinling_bg:'锦',
		yinling_info:'出牌阶段，你可以弃置一张黑色牌并指定一名其他角色。若如此做，你获得其一张牌并置于你的武将牌上，称为“锦”（数量最多为四）',
		junwei:'军威',
		junwei2:'军威',
		junwei_info:'结束阶段开始时，你可以移去三张“锦”，若如此做，你须指定一名角色并令其选择一项：1.亮出一张【闪】，然后由你交给任意一名角色。2.该角色失去1点体力，然后由你选择将其装备区的一张牌移出游戏。在该角色的回合结束后，将以此法移出游戏的装备牌移回原处',
		yanxiao:'言笑',
		yanxiao2:'言笑',
		yanxiao_info:'出牌阶段，你可以将一张♦牌置于一名角色的武将牌上，武将牌上有“言笑”牌的角色下个判定阶段开始时，获得言笑牌及其判定区里的所有牌',
		anxian:'安娴',
		anxian_info:'每当你使用【杀】对目标角色造成伤害时，你可以防止此次伤害，令其弃置一张手牌，然后你摸一张牌；当你成为【杀】的目标时，你可以弃置一张手牌使之无效，然后该【杀】的使用者摸一张牌',
		xingwu:'星舞',
		xingwu_info:'弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上：若你有至少三张“星舞”牌，你移去“星舞”牌并选择一名男性角色，该角色受到2点伤害并弃置其装备区的所有牌',
		luoyan:'落雁',
		luoyan_info:'锁定技。若你的武将牌上有“星舞牌”，你拥有“天香”和“流离”',
		yinbing:'引兵',
		yinbing_info:'结束阶段开始时，你可以将至少一张非基本牌置于武将牌上。每当你受到【杀】或【决斗】的伤害后，你移去一张“引兵牌”',
		juedi:'绝地',
		juedi_info:'锁定技，准备阶段，你选择一项：1.移去“引兵”牌，将手牌补至体力上限数；2.将“引兵”牌交给一名体力值不大于你的其他角色，其回复1点体力，摸等量的牌',
		kuangfu:'狂斧',
		kuangfu_info:'每当你使用杀造成伤害，可以将对方的一张装备牌移到你的装备区',
		xintan:'心惔',
		xintan_info:'出牌阶段限一次，你可以移去两张“焚”并选择一名角色，该角色失去一点体',
		fentian:'焚天',
		fentian_info:'锁定技，结束阶段开始时，若你的手牌数少于体力值，你须选择一名攻击范围内的角色，将其一张牌置于你的武将牌上，称为“焚”。锁定技，你的攻击范围+X（X为“焚”的数量）',
		zhiri:'炙日',
		zhiri_info:'觉醒技，准备阶段开始时，若“焚”数不小于3，你减1点体力上限，然后获得技能“心惔”（出牌阶段限一次，你可以移去两张“焚”并选择一名角色，该角色失去一点体力）',
		meibu:'魅步',
		meibu_info:'一名其他角色的出牌阶段开始时，若你不在其攻击范围内，你可以令该角色的锦囊牌均视为【杀】，直到该角色以此法使用了一张【杀】或回合结束。若如此做，则直到回合结束，视为你在其攻击范围内',
		mumu:'穆穆',
		mumu_info:'出牌阶段限一次，你可以弃置一张【杀】或黑色锦囊牌，然后选择一项：弃置场上一张武器牌，然后摸一张牌；或将场上的一张防具牌移动到你的装备区里（可替换原防具）',
		zhanyi:'战意',
		zhanyi_basic_sha:'战杀',
		zhanyi_basic_jiu:'战酒',
		zhanyi_basic_tao:'战桃',
		zhanyi_info:'出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作杀、酒或桃使用；锦囊牌，摸两张牌且你使用的牌无距离限制；装备牌，你使用【杀】指定目标角色后，其弃置两张牌',
		nuzhan:'怒斩',
		nuzhan2:'怒斩',
		nuzhan_info:'锁定技，你每当你使用由一张锦囊牌转化而来的【杀】时，你可以额外使用一张杀；锁定技，你使用的由一张装备牌转化而来的【杀】的伤害值基数+1',
		danji:'单骑',
		danji_info:'觉醒技，准备阶段开始时，若你的手牌数大于你的体力值，你减1点体力上限，然后获得“马术”和“怒斩”',
		tunchu:'屯储',
		tunchu_info:'摸牌阶段摸牌时，你可以额外摸两张牌，若如此做，将一张手牌置于你的武将上，称为“粮”，只要你的武将牌上有“粮”，你便不能使用【杀】和【决斗】',
		shuliang:'输粮',
		shuliang_info:'每当一名角色的结束阶段开始时，若其没有手牌，你可以移去一张“粮”，然后该角色摸两张牌',
		jieyuan:'竭缘',
		jieyuan_more:'竭缘',
		jieyuan_less:'竭缘',
		jieyuan_info:'当你对一名其他角色造成伤害时，若其体力值大于或等于你的体力值，你可弃置一张黑色手牌令此伤害+1；当你受到一名其他角色造成的伤害时，若其体力值大于或等于你的体力值，你可弃置一张红色手牌令此伤害-1。',
		fenxin:'焚心',
		fenxin_info:'限定技，当你杀死一名非主公角色时，在其翻开身份牌之前，你可以与该角色交换身份牌。（你的身份为主公时不能发动此技能）',
		shixin:'释衅',
		shixin_info:'锁定技，当你受到火属性伤害时，你防止此伤害',
		qingyi:'轻逸',
		qingyi1:'轻逸',
		qingyi2:'轻逸',
		qingyi_info:'你可以跳过摸牌阶段，或跳过出牌阶段并弃置一张装备牌，若如此则视为对任意一名使用一张【杀】',
		dujin:'独进',
		dujin_info:'摸牌阶段，你可以额外摸X+1张牌（X为你装备区里牌数的一半且向下取整）',
		yuhua:'羽化',
		yuhua_info:'锁定技，弃牌阶段内，你的非基本牌不计入手牌数，且你不能弃置你的非基本牌',
		qirang:'祈禳',
		qirang_info:'当有装备牌进入你的装备区时，你可以获得牌堆中的一张锦囊牌',
		biluan:'避乱',
		biluan_info:'摸牌阶段开始时，若有其他角色与你距离不大于1，则你可以放弃摸牌。若如此做，你的防御距离+X（X为势力数）',
		lixia:'礼下',
		lixia_info:'锁定技，其他角色结束阶段开始时，若你不在其攻击范围内，你摸一张牌或令其摸一张牌。若如此做，你的防御距离-1',
		yishe:'义舍',
		yishe_bg:'米',
		yishe_info:'结束阶段开始时，若你的武将牌上没有牌，你可以摸两张牌。若如此做，你将两张牌置于武将牌上，称为“米”；当“米”移至其他区域后，若你的武将牌上没有“米”，你回复1点体力',
		bushi:'布施',
		midao:'米道',
		bushi_info:'当你受到1点伤害后，或其他角色受到你造成的1点伤害后，受到伤害的角色可以获得一张“米”',
		midao_info:'当一张判定牌生效前，你可以打出一张“米”代替之',
		fengpo:'凤魄',
		fengpo_info:'当你于出牌阶段内使用第一张【杀】或【决斗】指定目标后，若目标角色数为1，你可以选择一项：1.摸X张牌；2.此牌造成的伤害+X（X为其手牌中方牌的数量）',
		chenqing:'陈情',
		chenqing_info:'每轮限一次，当一名角色处于濒死状态时，你可以令另一名其他角色摸四张牌，然后弃置四张牌。若其以此法弃置的四张牌花色各不相同，则视为该角色对濒死的角色使用一张【桃】',
		mozhi:'默识',
		mozhi_info:'结束阶段开始时，你可以将一张手牌当你本回合出牌阶段使用的第一张基本或普通锦囊牌使用。然后，你可以将一张手牌当你本回合出牌阶段使用的第二张基本或普通锦囊牌使用',
		ranshang:'燃殇',
		ranshang2:'燃殇',
		ranshang_info:'锁定技，当你受到1点火焰伤害后，你获得1枚“燃”标记；结束阶段开始时，你失去X点体力（X为“燃”标记的数量）',
		hanyong:'悍勇',
		hanyong_info:'当你使用【南蛮入侵】或【万箭齐发】时，若你的体力值小于游戏轮数，你可以令此牌造成的伤害+1',

		yicong:'义从',
		yongsi:'庸肆',
		yongsi1:'庸肆',
		yongsi2:'庸肆',
		bifa:'笔伐',
		bifa2:'笔伐',
		songci:'颂词',
		baobian:'豹变',
		lihun:'离魂',
		chongzhen:'冲阵',
		chongzhen1:'冲阵',
		chongzhen2:'冲阵',
		yuanhu:'援护',
		tianming:'天命',
		mizhao:'密诏',
		duwu:'黩武',
		mingzhe:'明哲',
		huanshi:'缓释',
		hongyuan:'弘援',
		aocai:'傲才',
		aocai2:'傲才',
		aocai2_backup:'傲才',
		aocai3:'傲才',
		huxiao:'虎啸',
		xueji:'血祭',
		wuji:'武继',
		shushen:'淑慎',
		shenzhi:'神智',
		xiongyi:'雄异',
		junbing:'郡兵',
		junbing2:'郡兵',
		quji:'去疾',
		sijian:'死谏',
		suishi:'随势',
		suishi2:'随势',
		xiaoguo:'骁果',
		duanxie:'断绁',
		fenming:'奋命',
		guixiu:'闺秀',
		cunsi:'存嗣',
		yongjue:'勇决',
		hengzheng:'横征',
		shengxi:'生息',
		shoucheng:'守成',
		shangyi:'尚义',
		zhendu:'鸩毒',
		qiluan:'戚乱',
		qiluan2:'戚乱',
		qiluan3:'戚乱',
		shenxian:'甚贤',
		qiangwu:'枪舞',
		moukui:'谋溃',
		moukui2:'谋溃',
		lirang:'礼让',
		mingshi:'名士',
		liangzhu:'良助',
		kaikang:'慷忾',
		wangzun:'妄尊',
		tongji:'同疾',
		kuiwei:'溃围',
		kuiwei2:'溃围',
		yanzheng:'严整',
		zhoufu:'咒缚',
		zhoufu2:'咒缚',
		zhoufu3:'咒缚',
		yingbin:'影兵',
		fenxun:'奋迅',
		fenxun2:'奋迅',
		spmengjin:'猛进',
		xiemu:'协穆',
		naman:'纳蛮',
		zuixiang:'醉乡',
		manjuan:'漫卷',
		taichen:'抬榇',
		jilei:'鸡肋',
		jilei2:'鸡肋',
		jilei2_bg:'肋',
		fulu:'符箓',
		fuji:'助祭',
		fenyin:'奋音',
		yawang:'雅望',
		xunzhi:'殉志',
		yingjian:'影箭',
		fanxiang:'返乡',
		fanxiang_info:'觉醒技，准备阶段开始时，若全场有至少一名已受伤且你曾发动【良助】令其摸牌的角色，则你回复1点体力和体力上限，失去技能【良助】并获得技能【枭姬】',
		yingjian_info:'准备阶段，你可以视为使用一张无视距离的杀',
		xunzhi_info:'准备阶段开始时，若你的上家和下家与你的体力值均不相等，你可以失去1点体力。若如此做，你的手牌上限+2',
		yawang_info:'锁定技，摸牌阶段开始时，你改为摸x张牌，然后你于出牌阶段内至多使用x张牌（x为与你体力值相等的角色数）',
		fenyin_info:'你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌颜色不同，则你可以摸一张牌，每回合最多发动3次',
		fuji_info:'当一名角色造成雷电伤害时，你可以令其进行一次判定，若结果为黑色，此伤害+1；若结果为红色，该角色获得此牌。',
		fulu_info:'你可以将【杀】当雷【杀】使用。',
		jilei_info:'每当你受到有来源的伤害时，你可以选择一种牌的类别，令伤害来源不能使用、打出或弃置其此类别的手牌，直到回合结束',
		danlao:'啖酪',
		danlao_info:'当你成为一张指定了多个目标的锦囊牌的目标时，你可以取消之，并摸一张牌。',
		gongao:'功獒',
		zhuiji:'追击',
		chouhai:'仇海',
		chouhai_info:'锁定技，当你每次受到伤害时，若你没有手牌，此伤害+1。',
		guiming:'归命',
		guiming_info:'主公技，锁定技，你将残蚀描述中的“已受伤角色”改为“已受伤角色或其他吴势力角色”',
		chixin:'赤心',
		chixin1:'赤心',
		chixin2:'赤心',
		chixin_info:'你可以将♦牌当【杀】或【闪】使用或打出。出牌阶段，你对你攻击范围内的每名角色均可使用一张【杀】。',
		suiren:'随仁',
		suiren_info:'限定技，准备阶段开始时，你可以失去技能“义从”，然后加1点体力上限并回复1点体力，再令一名角色摸三张牌。',
		canshi:'残蚀',
		canshi2:'残蚀',
		canshi_info:'摸牌阶段开始时，你可以改为摸x张牌（x为已受伤的角色数），若如此做，当你与此回合内使用基本牌或锦囊牌时，你弃置一张牌。',
		zhuiji_info:'锁定技，你与体力值低于你的角色距离为1。',
		kunfen:'困奋',
		kunfen_info:'锁定技，结束阶段开始时，你失去１点体力，然后摸两张牌',
		fengliang:'逢亮',
		fengliang_info:'觉醒技，当你进入濒死状态时，你减１点体力上限并将体力值回复至２点，然后获得技能挑衅，将困奋改为非锁定技',
		cihuai:'刺槐',
		cihuai_info:'出牌阶段开始时，若你手牌中没有杀，你可以展示你的手牌，视为对一名角色使用一张杀',
		gongao_info:'锁定技，每当一名角色死亡后，你增加一点体力上限，回复一点体力。',
		juyi:'举义',
		juyi_info:'觉醒技，准备阶段开始时，若你已受伤且体力上限大于存活角色数，你须将手牌摸至体力上限，然后获得技能“崩坏”和“威重”。',
		weizhong:'威重',
		weizhong_info:'锁定技，每当你的体力上限增加或减少时，你摸一张牌。',
		taichen_info:'出牌阶段限一次，你可以自减一点体力，视为对一名角色使用一张杀（不计入回合内出杀限制）',
		manjuan_info:'其他角色的卡牌因弃置而进入弃牌堆后，你可以弃置一张花色与之不同的牌，然后获得之',
		zuixiang_info:'限定技，准备阶段开始时，你可以展示牌库顶的3张牌并置于你的武将牌上，你不可使用或打出与该些牌同类的牌，所有同类牌对你无效。之后每个你的准备阶段，你须重复展示一次，直至该些牌中任意两张点数相同时，将你武将牌上的全部牌置于你的手上。',
		naman_info:'你可以获得其他角色打出的杀',
		xiemu_info:'每当你成为其他角色的黑色牌的目标，可以弃置一张杀并摸两张牌',
		spmengjin_info:'每当你使用一张杀，可以弃置目标一张牌',
		fenxun_info:'出牌阶段限一次，你可以弃置一张牌并选择一名其他角色，然后本回合你计算与其的距离视为1',
		yingbin_info:'受到“咒缚”技能影响的角色进行判定时，你可以摸两张牌。',
		zhoufu_info:'出牌阶段限一次，你可以指定一名其他角色并将一张手牌移出游戏(将此牌置于该角色的武将牌旁)。若如此做，该角色进行判定时，改为将此牌作为判定牌。该角色的结束阶段，若此牌仍在该角色旁，你将此牌收入手牌。',
		yanzheng_info:'若你的手牌数大于你的体力值，你可以将你装备区内的牌当【无懈可击】使用',
		kuiwei_info:'结束阶段开始时，你可以摸2+X张牌，然后将你的武将牌翻面。在你的下个摸牌阶段开始时，你须弃置X张牌。（X等于当时场上装备区内的武器牌的数量）',
		tongji_info:'锁定技。若你的手牌数大于你的体力值，则只要你在任一其他角色的攻击范围内，该角色使用【杀】时便不能指定你以外的角色为目标',
		wangzun_info:'其他角色的准备阶段，你可以摸一张牌，然后令该角色此回合的手牌上限-1；直到你的回合开始，你不能再次发动此技',
		kaikang_info:'每当你距离1以内的角色成为杀的目标后，你可以摸一张牌。若如此做，你交给其一张牌并展示之，若该牌为装备牌，该角色可以使用此牌。',
		liangzhu_info:'当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌 ',
		mingshi_info:'当你即将受到伤害时，若伤害来源的体力值大于你，你可以弃置一张黑色手牌令伤害-1 ',
		lirang_info:'你可以将你弃置的卡牌交给一名其他角色 ',
		moukui_info:'当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ',
		qiangwu_info:'出牌阶段，你可以进行一次判定。若如此做，则直到回合结束，你使用点数小于判定牌的 【杀】时不受距离限制，且你使用点数大于判定牌的【杀】时不计入出牌阶段的使用次数。',
		shenxian_info:'每名角色的回合限一次，你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。',
		qiluan_info:'每当你杀死一名角色后，可以在此回合结束时摸三张牌。',
		zhendu_info:'其他角色的出牌阶段开始时，你可以弃置一张手牌，视为该角色使用一张【酒】，然后你对其造成一点伤害。',
		shangyi_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，然后弃置其中的一张黑色牌',
		shoucheng_info:'每当一名其他角色在其回合外失去最后的手牌时，你可令该角色摸一张牌。',
		shengxi_info:'若你于出牌阶段未造成伤害，你可在弃牌阶段开始时摸两张牌。',
		hengzheng_info:'摸牌阶段开始时，若你的体力值为1或你没有手牌，你可以改为获得每名其他角色区域里的一张牌。',
		cunsi_info:'限定技，出牌阶段，你可以将所有手牌交给一名男性角色，令该角色获得技能【勇决】，然后将武将牌翻面',
		guixiu_info:'每当你成为杀的目标，若你的手牌数小于体力值，可以摸一张牌',
		fenming_info:'结束阶段开始时，若你处于连环状态，你可以弃置处于连环状态的每名角色的一张牌。',
		duanxie_info:'出牌阶段限一次，你可以令一名其他角色横置武将牌，若如此做，你横置武将牌。',
		xiaoguo_info:'其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌并令你摸一张牌；2.受到你对其造成的1点伤害。',
		sijian_info:'当你失去最后的手牌时，你可以弃置一名其他角色的一张牌。',
		suishi_info:'每当其他角色进入濒死状态时，伤害来源可以令你摸一张牌；每当其他角色死亡时，伤害来源可以令你失去1点体力',
		quji_info:'出牌阶段限一次，你可以弃置X张牌（X为你已损失的体力值），然后令至多X名已受伤的角色各回复1点体力。若你以此法弃置的牌中有黑色牌，你失去一点体力。',
		junbing_info:'一名角色的结束阶段开始时，若其手牌数少于或者等于1，该角色可以摸一张牌。若如此做，该角色须将所有手牌交给你，然后你交给其等量的牌。',
		xiongyi_info:'限定技，出牌阶段，你可以与你势力相同的所有角色各摸3张牌（非国战模式改为任选至多3名角色）；若你指定的角色数不超过2，你回复1点体力',
		shenzhi_info:'准备阶段开始时，你可以弃置所有手牌，若你以此法弃置的牌的张数不小于X，你回复1点体力（X为你当前的体力值）。',
		shushen_info:'当你回复1点体力时，你可以令一名其他角色回复1点体力或摸两张牌',
		wuji_info:'觉醒技，结束阶段开始时，若你于此回合内已造成3点或更多伤害，你加1点体力上限，回复1点体力，然后失去技能“虎啸”。',
		xueji_info:'出牌阶段，你可弃置一张红色牌并选择你攻击范围内的至多X名其他角色，对这些角色各造成1点伤害（X为你已损失的体力值），然后这些角色各摸一张牌。每阶段限一次。',
		huxiao_info:'锁定技，你于出牌阶段内每使用一张【杀】被【闪】抵消，你于此阶段内可以额外使用一张【杀】。',
		aocai_info:'当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌。若你观看的牌中有此牌，你可以使用打出之。',
		hongyuan_info:'摸牌阶段摸牌时，你可以少摸一张牌，然后指定至多两名其他角色各摸一张牌。',
		hongyuan_info_combat:'摸牌阶段摸牌时，你可以少摸一张牌，然后令其他友方角色各摸一张牌',
		huanshi_info:'一名角色的判定牌生效前，你可令其观看你的手牌。若如此做，该角色选择你的一张牌，令你打出此牌代替之。',
		mingzhe_info:'你的回合外，每当你因使用、打出或弃置而失去一张红色牌时，你可以摸一张牌。',
		duwu_info:'出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你失去1点体力，且本回合不能再发动黩武。',
		tianming_info:'当你成为【杀】的目标时，你可以弃置两张牌(不足则全弃，无牌则不弃)，然后摸两张牌;若此时全场体力值最多的角色仅有一名(且不是你)，该角色也可以如此做。',
		mizhao_info:'出牌阶段，你可以将所有手牌(至少一张)交给一名其他角色。若如此做，你令该角色与你指定的另一名有手牌的角色拼点。视为拼点赢的角色对没赢的角色使用一张【杀】。每阶段限一次。',
		yuanhu_info:'结束阶段开始时，你可以将一张装备牌置于一名角色的装备区里，然后根据此装备牌的种类执行以下效果。武器牌：弃置距离该角色1以内的一名角色区域中的一张牌；防具牌：该角色摸一张牌；坐骑牌：该角色回复1点体力。',
		lihun_info:'出牌阶段，你可以弃置一张牌并将你的武将牌翻面，若如此做，你指定一名男性角色，获得其所有手牌。出牌阶段结束时，你需为该角色每一点体力分配给其一张牌。每回合限一次。',
		chongzhen_info:'每当你发动“龙胆”使用或打出一张手牌时，你可以立即获得对方的一张手牌。',
		bifa_info:'结束阶段开始时，你可以将一张手牌移出游戏并指定一名其他角色。该角色的准备阶段，其观看你移出游戏的牌并选择一项：交给你一张与此牌同类型的手牌并获得此牌；或将此牌置入弃牌堆，然后失去1点体力。',
		songci_info:'出牌阶段，你可以选择一项：令一名手牌数小于其体力值的角色摸两张牌；或令一名手牌数大于其体力值的角色弃置两张牌。此技能对每名角色只能使用一次。',
		yongsi_info:'锁定技，摸牌阶段，你额外摸X张牌，X为场上现存势力数。弃牌阶段，你至少须弃置等同于场上现存势力数的牌（不足则全弃）。',
		yicong_info:'锁定技，只要你的体力值大于2点，你的进攻距离+1；只要你的体力值为2点或更低，你的防御距离+1',
		baobian_info:'锁定技，若你的体力值为3或更少，你视为拥有技能“挑衅”；若你的体力值为2或更少；你视为拥有技能“咆哮”；若你的体力值为1，你视为拥有技能“神速”。',
	},
}
