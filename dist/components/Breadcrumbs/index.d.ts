import React from 'react';
declare type props = {
    hasHome: boolean;
    pathMap: {
        [key: string]: string;
    };
};
declare function RouterBreadcrumbs({ hasHome, pathMap }: props): React.ReactElement;
declare namespace RouterBreadcrumbs {
    var defaultProps: {
        hasHome: boolean;
    };
}
export default RouterBreadcrumbs;
