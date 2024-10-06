import {Logo} from './Logo'
import { Button } from '@/components/ui/button'


export const Footer = () => {
    return(
        <div className="flex items-center justify-between h-5 p-10">
            <div>
                <Logo/>
            </div>
            <div className="space-x-2">
                <Button variant="ghost" size="sm">Privacy Policy</Button>
                <Button variant="ghost" size="sm">Terms & Conditions</Button>
            </div>
        </div>
    )
}

