import classNames from 'classnames/bind';
import HomeItems from '~/components/HomeItems';

import styles from './Following.module.scss';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <HomeItems
                srcImg="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/976fa7f461285d4a4e8246d1aec8289a.jpeg?x-expires=1678464000&x-signature=%2B0Dk%2F9upQYsY6tAqr7p6q8vcpYQ%3D"
                srcVideo="https://player.vimeo.com/progressive_redirect/playback/773480327/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=761e00a75589bcf9588dcf98639cb2ceff1b5a443510ea82e3e190f70d7850f7"
                following={true}
            />
            <HomeItems
                srcImg="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/000142d1098debc0392d296bfa429563~c5_100x100.jpeg?x-expires=1678464000&x-signature=N2azWcJwlCuZPR63soTJeFYCUnY%3D"
                srcVideo="https://player.vimeo.com/external/549844014.sd.mp4?s=7835aa60c6e4d4e5138cf4f0ba2447ba761464c4&profile_id=164&oauth2_token_id=57447761"
                following={true}
            />
            <HomeItems
                srcImg="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1678464000&x-signature=ODp6HalFNAquzKEwom7GkrgnxlQ%3D"
                srcVideo="https://player.vimeo.com/external/620428478.sd.mp4?s=5bf62cbdcf7f0d6a1309e5fb168fd2946cff5312&profile_id=164&oauth2_token_id=57447761"
                following={true}
            />
            <HomeItems
                srcImg="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a8d19820fef513645f089de1beabfffe~c5_100x100.jpeg?x-expires=1678464000&x-signature=MjxtoxoDhrCoO9lpNZYECY81F14%3D"
                srcVideo="https://player.vimeo.com/external/455645260.sd.mp4?s=c86318cff9c12a3d1ebfe9650241e701d6e5e83b&profile_id=164&oauth2_token_id=57447761"
                following={true}
            />
            <HomeItems
                srcImg="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1678471200&x-signature=AdITTOBWzBReLaodazCA0sbD2Vs%3D"
                srcVideo="https://player.vimeo.com/progressive_redirect/playback/777594244/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=cdbdc1b0b4935f4564e0a66ee15a0ed57446330d7af11c2ef29c93514e38e997"
                following={true}
            />
        </div>
    );
}

export default Following;
