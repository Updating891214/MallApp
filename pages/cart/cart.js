Page({data:{carts: [
            {cid:1008,title:'Zippo打火机',image:'../../images/zippo.png',num:'1',price:'198.0',sum:'198.0',selected:true},
            {cid:1012,title:'iPhone7 Plus',image:'../../images/phone.png',num:'1',price:'7188.0',sum:'7188.0',selected:true},
            {cid:1031,title:'得力订书机',image:'../../images/stapler.png',num:'3',price:'15.0',sum:'45.0',selected:false},
            {cid:1054,title:'康师傅妙芙蛋糕',image:'../../images/cookie.png',num:'2',price:'15.2',sum:'30.4',selected:false},
            {cid:1063,title:'英雄钢笔',image:'../../images/pen.png',num:'1',price:'122.0',sum:'122.0',selected:true},
        ],
        minusStatuses:['disabled','disabled','normal','normal','disable'],
        selectedAllStatus:false,
        total:'',
        toastHidden:true,
        toaststr:''
    },

    bindMinus:function(e){
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.data.carts[index].num;
        if(num > 1)
        {
            num --;
        }
        var minusStatus = num <= 1?'disable':'normal';
        var carts = this.data.carts;
        carts[index].num = num;
        var minusStatuses = this.data.minusStatuses;
        minusStatuses[index] = minusStatus;
        this.sum();
        this.setData({
            carts:carts,
            minusStatuses:minusStatuses
        });
    },

    bindPlus:function(e){
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.data.carts[index].num;
        num++;
        var minusStatus = num <= 1?'disable':'normal';
        var carts = this.data.carts;
        carts[index].num = num;
        var minusStatuses = this.data.minusStatuses;
        minusStatuses[index] = minusStatus;
        this.sum();
        this.setData({
            carts:carts,
            minusStatuses:minusStatuses
        });
    },

    bindSelectAll:function(){
        var selectedAllStatus = this.data.selectedAllStatus;
        selectedAllStatus = !selectedAllStatus;
        var carts = this.data.carts;
        for (var i = 0;i < carts.length;i++)
        {
            carts[i].selected = selectedAllStatus;

        }
        this.sum();
        this.setData({
            selectedAllStatus:selectedAllStatus,
            carts:carts,
        });
        console.log("select all");
    },

    bindCheckbox: function(e){
        var index = parseInt(e.currentTarget.dataset.index);
        var selected = this.data.carts[index].selected;
        var carts = this.data.carts;
        carts[index].selected = !selected;
        this.sum();
        this.setData({
            carts:carts
        });
    },

    sum:function(){
    var carts = this.data.carts;
    var total = 0;
    for(var i = 0; i < carts.length;i++ ){
        if(carts[i].selected){
            total += carts[i].num * carts[i].price; 
        }
    }
    this.setData({
        carts:carts,
        total:total
    });
    },

    bindCheckout:function(){
        var cartIds = 'cid:';
        for(var i = 0;i < this.data.carts.length; i++){
            if(this.data.carts[i].selected){
                cartIds += this.data.carts[i].cid;
                cartIds += ' ';
            }
        }
        this.setData({
            toastHidden:false,
            toaststr:cartIds
        })
    },
    bindToastChange:function(){
        this.setData({
            toastHidden:true
        })
    },
    
    /*该函数功能欠缺，需要查询当前用户购物车的相关数据 */
    onShow:function(){
        this.sum();

    },
})