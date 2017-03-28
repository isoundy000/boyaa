//��װ��һЩ���õĺ���
var Util = {

    /**
     * ������ҳ������ΪclassName�ı�ǩ
     * @param className ����
     * @returns {*} ����ΪclassName�ı�ǩ
     */
    getByClass:function(className)
    {
        //��������֧��document.getElementsByClassName
        if(document.getElementsByClassName)
        {
            //ֱ��ʹ��document.getElementsByClassName
            return document.getElementsByClassName(className);
        }

        var array = [];

        //�����ҳ�нڵ�ĸ���
        var dom = document.getElementsByTagName("*");

        //������ҳ�еĽڵ�
        for(var i = 0; i < dom.length; i++)
        {
            //���ڵ������������txtArr������
            var txtArr = dom[i].className.split(" ");

            //����txtArr����
            for(var j = 0; j < txtArr.length; j++)
            {
                //���txtArr�����д���className
                if(txtArr[j] == className)
                {
                    array.push(dom[i]);
                }
            }
        }
        return array;
    },

    //����봰�ڻ�����ص���Ϣ
    scroll:function()
    {
        if(window.pageYOffset != null)  //  ie9+ �����������
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // �������� DTD
        // ����ǲ��ǹ���ģʽ������� -- ����û�� ����<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  ʣ�µĿ϶��ǹ���ģʽ��
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}