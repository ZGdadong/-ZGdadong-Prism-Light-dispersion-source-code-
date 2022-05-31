/*:
 * ===============================
 * MND_ChangeScreenSize.js
 * =============================== 
 * @plugindesc �޸���Ϸ��Ļ�ֱ���
 * @author ݫ�� @66rpg
 * 
 * @param Screen Width
 * @desc ��Ļ���
 * @default 816
 * 
 * @param Screen Height
 * @desc ��Ļ�߶�
 * @default 624
 * 
 * @help
 * ���� Screen Width �� Screen Height ���ɡ�
 *
 * by ������(Mandarava) 2016.06.06
 */
 
(function(){
    var params=PluginManager.parameters("MND_ChangeScreenSize");
    var screenWidth=Number(params["Screen Width"]);
    var screenHeight=Number(params["Screen Height"]);
 
    SceneManager._screenWidth  = screenWidth;
    SceneManager._screenHeight = screenHeight;
    SceneManager._boxWidth     = screenWidth;
    SceneManager._boxHeight    = screenHeight;
 
    var newWidth = screenWidth - window.innerWidth;
    var newHeight = screenHeight - window.innerHeight;  
    window.moveBy(- newWidth / 2, - newHeight / 2);
    window.resizeBy(newWidth, newHeight);
})();