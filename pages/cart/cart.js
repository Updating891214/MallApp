Page({data:{carts: [
            {cid:1008,title:'Zippo打火机',image:'../../images/zippo.png',num:'1',price:'198.0',sum:'198.0',selected:true},
            {cid:1012,title:'iPhone7 Plus',image:'../../images/phone.png',num:'1',price:'7188.0',sum:'7188.0',selected:true},
            {cid:1031,title:'得力订书机',image:'../../images/stapler.png',num:'3',price:'15.0',sum:'45.0',selected:false},
            {cid:1054,title:'康师傅妙芙蛋糕',image:'../../images/cookie.png',num:'2',price:'15.2',sum:'30.4',selected:false},
            {cid:1063,title:'英雄钢笔',image:'../../images/pen.png',num:'1',price:'122.0',sum:'122.0',selected:true},
        ],
        minusStatuses:['disabled','disabled','normal','normal','disable']
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
        this.setData({
            carts:carts,
            minusStatuses:minusStatuses
        });
    }
})