// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";

import { cn } from "@/utils/cn";
import React from 'react';
import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import cn from 'classnames';

const Label = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <LabelPrimitiveRoot
      ref={ref}
      className={cn(
        "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...restProps}
    />
  );
});

export default Label;

