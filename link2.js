// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @becut ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn đã kích hoạt thành công";var becut={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2005-05-9T01:04:18Z",purchase_date:"2005-05-9T01:04:17Z",store:"app_store"},vuong2023={grace_period_expires_date:null,purchase_date:"2005-05-9T01:04:17Z",product_identifier:"com.becut.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(vuong2023.product_identifier=s,obj.subscriber.subscriptions[s]=becut):obj.subscriber.subscriptions["com.becut.premium.yearly"]=becut,obj.subscriber.entitlements[e]=vuong2023}else obj.subscriber.subscriptions["com.becut.premium.yearly"]=becut,obj.subscriber.entitlements.pro=vuong2023;$done({body:JSON.stringify(obj)});