import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PopperWrapper>
        </div>
    );
};

function AccountItem({ data }) {
    return (
        <div>
            <Tippy interactive placement="bottom" offset={[-20, 2]} delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt="img" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
