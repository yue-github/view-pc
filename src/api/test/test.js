import service from '@/utils/service';
import { baseUrl } from '@/config/url';
export function test(data){
    return service({
        url:`${baseUrl}api/test`,
        method:'post',
        data:data 
    })
}