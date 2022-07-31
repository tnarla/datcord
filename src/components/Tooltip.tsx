import {
	useFloating,
	useInteractions,
	useHover,
	useFocus,
	useRole,
	offset,
	flip,
	shift,
	useDismiss,
	Placement,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';

interface Props {
	children: ReactNode;
	contents: ReactNode;
	placement?: Placement;
  offsetAmount?: number;
}

export function Tooltip({ children, contents, placement, offsetAmount = 8 }: Props) {
	const [open, setOpen] = useState(false);

	const { x, y, reference, floating, strategy, context } = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		middleware: [offset(offsetAmount), flip(), shift({ padding: 8 })],
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useHover(context),
		useFocus(context),
		useRole(context, { role: 'tooltip' }),
		useDismiss(context),
	]);

	return (
		<div>
			<div {...getReferenceProps({ ref: reference })}>{children}</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.85 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: 'spring', damping: 20, stiffness: 300 }}
						{...getFloatingProps({
							ref: floating,
							className:
								'inline-flex items-center px-2.5 py-0.5 shadow rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-800 text-primary',
							style: {
								position: strategy,
								top: y ?? 0,
								left: x ?? 0,
							},
						})}
					>
						{contents}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
